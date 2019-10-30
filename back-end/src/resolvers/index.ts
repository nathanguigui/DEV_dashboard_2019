import { Query } from './Query'
import { User } from './User'
import { Mutation } from './Mutation'
import { AuthPayload } from './AuthPayload'
import {UpdateMeInput, UpdateMeWidgetsInput} from "./updateMeInput";
import {createWidget} from "./Widgets";

export const resolvers = {
  Query,
  User,
  AuthPayload,
  Mutation,
  UpdateMeInput,
  UpdateMeWidgetsInput,
}
