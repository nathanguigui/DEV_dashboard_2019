import { prismaObjectType } from 'nexus-prisma'

export const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields(['id', 'email', 'name', "surname", "address", "phone", "type", "refreshTime",
      "backgroundImage", "sidebarDisabled", "googleToken", "intraToken", "spotifyToken", "timezone", "widgets"
    ])
  },
})
