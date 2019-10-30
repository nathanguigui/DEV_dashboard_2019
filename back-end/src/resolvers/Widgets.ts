import { prismaObjectType } from 'nexus-prisma'

export const createWidget = prismaObjectType({
  name: 'createWidget',
  definition(t) {
    t.prismaFields(['*'])
  },
})
