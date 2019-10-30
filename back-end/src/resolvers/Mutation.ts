import { stringArg, idArg, mutationType, arg } from 'nexus'
import { hash, compare } from 'bcrypt'
import { APP_SECRET, getUserId } from '../utils'
import { sign } from 'jsonwebtoken'
import { prisma } from '../generated/prisma-client';
import {prismaObjectType} from "nexus-prisma";

export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: stringArg({nullable: false}),
        surname: stringArg({nullable: false}),
        email: stringArg({nullable: false}),
        password: stringArg({nullable: false}),
        address: stringArg({nullable: true}),
        phone: stringArg({nullable: false}),
      },
      resolve: async (parent, { name, surname, email, password, address, phone }, ctx) => {
        const hashedPassword = await hash(password, 10)
        const user = await ctx.prisma.createUser({
          name,
          email,
          password: hashedPassword,
          surname,
          address,
          phone
        })
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          User: user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg({nullable: false}),
        password: stringArg({nullable: false}),
      },
      resolve: async (parent, { email, password }, context) => {
        const user = await context.prisma.user({ email })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          User: user,
        }
      },
    });

    t.prismaFields(["createWidget", "updateWidget"]);

    t.field('updateMe', {
      type: 'User',
      args: {
        data: arg({type: "UpdateMeInput", required: true})
      },
      resolve: async (parent, {data}, context) => {
        const userId: string = getUserId(context);
        if (userId) {
          const user = await prisma.updateUser({
            data: data,
            where: {
              id: userId
            }
          });
          return user;
        }
      }
    });
  },
})
