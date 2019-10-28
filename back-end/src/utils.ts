import { verify } from 'jsonwebtoken'
import { Context } from './types'

export const APP_SECRET = 'appsecret321'

interface Token {
  userId: string
}

export function getUserId(context: Context) {
  //console.log(context);
  const Authorization = context.req.get('Authorization')
  //console.log(Authorization);
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token
    return verifiedToken && verifiedToken.userId
  }
}
