import { GraphQLServer } from 'graphql-yoga'
const { ApolloServer } = require('apollo-server');
import { prisma } from './generated/prisma-client'
import * as path from 'path'
import { makePrismaSchema } from 'nexus-prisma'
import { permissions } from './permissions'
import * as allTypes from './resolvers'
import datamodelInfo from './generated/nexus-prisma'
import { applyMiddleware } from "graphql-middleware";

const schema = applyMiddleware(
  makePrismaSchema({
    // Provide all the GraphQL types we've implemented
    types: [allTypes],

    // Configure the interface to Prisma
    prisma: {
      datamodelInfo,
      client: prisma,
    },

    // Specify where Nexus should put the generated files
    outputs: {
      schema: path.join(__dirname, './generated/schema.graphql'),
      typegen: path.join(__dirname, './generated/nexus.ts'),
    },

    // Configure nullability of input arguments: All arguments are non-nullable by default
    nonNullDefaults: {
      input: false,
      output: false,
    },

    // Configure automatic type resolution for the TS representations of the associated types
    typegenAutoConfig: {
      sources: [
        {
          source: path.join(__dirname, './types.ts'),
          alias: 'types',
        },
      ],
      contextType: 'types.Context',
    },
  }),
  permissions
)

const server = new ApolloServer({
  schema,
  debug: true,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
//server.start(() => console.log(`🚀 Server ready at http://localhost:4000`))
