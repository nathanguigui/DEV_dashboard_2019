import { rule, shield, and } from 'graphql-shield'
import { getUserId } from '../utils'

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context)
    return Boolean(userId)
  }),
  isAdminUser: rule()(async (parent, args, context) => {
    const userId = getUserId(context)
    const user = await context.prisma.user({id: userId});

    if (user.type == "ADMIN")
      return (true);
    return (false);

  }),
}

export const permissions = shield(
  {
    Query: {
      me: rules.isAuthenticatedUser,
      users: and(rules.isAuthenticatedUser, rules.isAdminUser),
      user: and(rules.isAuthenticatedUser, rules.isAdminUser),
      usersConnection: and(rules.isAuthenticatedUser, rules.isAdminUser),
      /*order: and(rules.isAuthenticatedUser, rules.isAdminUser),
      orders: and(rules.isAuthenticatedUser, rules.isAdminUser),
      ordersConnection: and(rules.isAuthenticatedUser, rules.isAdminUser),
      recipesConnection: and(rules.isAuthenticatedUser, rules.isAdminUser),
      productsConnection: and(rules.isAuthenticatedUser, rules.isAdminUser),*/
    },
    Mutation: {
      updateMe: rules.isAuthenticatedUser,
    },
  }
)
