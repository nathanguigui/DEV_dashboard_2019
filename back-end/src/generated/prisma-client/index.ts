// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
  widget: (where?: WidgetWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  widget: (where: WidgetWhereUniqueInput) => WidgetNullablePromise;
  widgets: (args?: {
    where?: WidgetWhereInput;
    orderBy?: WidgetOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Widget>;
  widgetsConnection: (args?: {
    where?: WidgetWhereInput;
    orderBy?: WidgetOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => WidgetConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createWidget: (data: WidgetCreateInput) => WidgetPromise;
  updateWidget: (args: {
    data: WidgetUpdateInput;
    where: WidgetWhereUniqueInput;
  }) => WidgetPromise;
  updateManyWidgets: (args: {
    data: WidgetUpdateManyMutationInput;
    where?: WidgetWhereInput;
  }) => BatchPayloadPromise;
  upsertWidget: (args: {
    where: WidgetWhereUniqueInput;
    create: WidgetCreateInput;
    update: WidgetUpdateInput;
  }) => WidgetPromise;
  deleteWidget: (where: WidgetWhereUniqueInput) => WidgetPromise;
  deleteManyWidgets: (where?: WidgetWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  widget: (
    where?: WidgetSubscriptionWhereInput
  ) => WidgetSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type WidgetType =
  | "WORLD_TIME"
  | "PORNHUB"
  | "XVIDEO"
  | "CRYPTOCOMPARE"
  | "NUMBERSAPI"
  | "ICDNB"
  | "OPENWEATHERMAP"
  | "RATESAPI";

export type WidgetOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "type_ASC"
  | "type_DESC"
  | "settings_ASC"
  | "settings_DESC"
  | "title_ASC"
  | "title_DESC"
  | "order_ASC"
  | "order_DESC";

export type UserType = "ADMIN" | "USER";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "name_ASC"
  | "name_DESC"
  | "surname_ASC"
  | "surname_DESC"
  | "address_ASC"
  | "address_DESC"
  | "refreshTime_ASC"
  | "refreshTime_DESC"
  | "backgroundImage_ASC"
  | "backgroundImage_DESC"
  | "sidebarDisabled_ASC"
  | "sidebarDisabled_DESC"
  | "googleToken_ASC"
  | "googleToken_DESC"
  | "intraToken_ASC"
  | "intraToken_DESC"
  | "spotifyToken_ASC"
  | "spotifyToken_DESC"
  | "timezone_ASC"
  | "timezone_DESC"
  | "phone_ASC"
  | "phone_DESC"
  | "type_ASC"
  | "type_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  password: String;
  name: String;
  surname: String;
  address?: Maybe<String>;
  refreshTime?: Maybe<Int>;
  backgroundImage?: Maybe<String>;
  sidebarDisabled?: Maybe<Boolean>;
  googleToken?: Maybe<String>;
  intraToken?: Maybe<String>;
  spotifyToken?: Maybe<String>;
  timezone?: Maybe<String>;
  widgets?: Maybe<WidgetCreateManyInput>;
  phone: String;
  type?: Maybe<UserType>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
  phone?: Maybe<String>;
}>;

export interface WidgetUpdateManyInput {
  create?: Maybe<WidgetCreateInput[] | WidgetCreateInput>;
  update?: Maybe<
    | WidgetUpdateWithWhereUniqueNestedInput[]
    | WidgetUpdateWithWhereUniqueNestedInput
  >;
  upsert?: Maybe<
    | WidgetUpsertWithWhereUniqueNestedInput[]
    | WidgetUpsertWithWhereUniqueNestedInput
  >;
  delete?: Maybe<WidgetWhereUniqueInput[] | WidgetWhereUniqueInput>;
  connect?: Maybe<WidgetWhereUniqueInput[] | WidgetWhereUniqueInput>;
  set?: Maybe<WidgetWhereUniqueInput[] | WidgetWhereUniqueInput>;
  disconnect?: Maybe<WidgetWhereUniqueInput[] | WidgetWhereUniqueInput>;
  deleteMany?: Maybe<WidgetScalarWhereInput[] | WidgetScalarWhereInput>;
  updateMany?: Maybe<
    | WidgetUpdateManyWithWhereNestedInput[]
    | WidgetUpdateManyWithWhereNestedInput
  >;
}

export interface WidgetWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  type?: Maybe<WidgetType>;
  type_not?: Maybe<WidgetType>;
  type_in?: Maybe<WidgetType[] | WidgetType>;
  type_not_in?: Maybe<WidgetType[] | WidgetType>;
  settings?: Maybe<String>;
  settings_not?: Maybe<String>;
  settings_in?: Maybe<String[] | String>;
  settings_not_in?: Maybe<String[] | String>;
  settings_lt?: Maybe<String>;
  settings_lte?: Maybe<String>;
  settings_gt?: Maybe<String>;
  settings_gte?: Maybe<String>;
  settings_contains?: Maybe<String>;
  settings_not_contains?: Maybe<String>;
  settings_starts_with?: Maybe<String>;
  settings_not_starts_with?: Maybe<String>;
  settings_ends_with?: Maybe<String>;
  settings_not_ends_with?: Maybe<String>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  order?: Maybe<Int>;
  order_not?: Maybe<Int>;
  order_in?: Maybe<Int[] | Int>;
  order_not_in?: Maybe<Int[] | Int>;
  order_lt?: Maybe<Int>;
  order_lte?: Maybe<Int>;
  order_gt?: Maybe<Int>;
  order_gte?: Maybe<Int>;
  AND?: Maybe<WidgetWhereInput[] | WidgetWhereInput>;
  OR?: Maybe<WidgetWhereInput[] | WidgetWhereInput>;
  NOT?: Maybe<WidgetWhereInput[] | WidgetWhereInput>;
}

export interface WidgetUpdateManyDataInput {
  type?: Maybe<WidgetType>;
  settings?: Maybe<String>;
  title?: Maybe<String>;
  order?: Maybe<Int>;
}

export interface WidgetUpdateDataInput {
  type?: Maybe<WidgetType>;
  settings?: Maybe<String>;
  title?: Maybe<String>;
  order?: Maybe<Int>;
}

export interface WidgetUpdateManyWithWhereNestedInput {
  where: WidgetScalarWhereInput;
  data: WidgetUpdateManyDataInput;
}

export interface WidgetUpdateWithWhereUniqueNestedInput {
  where: WidgetWhereUniqueInput;
  data: WidgetUpdateDataInput;
}

export interface WidgetScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  type?: Maybe<WidgetType>;
  type_not?: Maybe<WidgetType>;
  type_in?: Maybe<WidgetType[] | WidgetType>;
  type_not_in?: Maybe<WidgetType[] | WidgetType>;
  settings?: Maybe<String>;
  settings_not?: Maybe<String>;
  settings_in?: Maybe<String[] | String>;
  settings_not_in?: Maybe<String[] | String>;
  settings_lt?: Maybe<String>;
  settings_lte?: Maybe<String>;
  settings_gt?: Maybe<String>;
  settings_gte?: Maybe<String>;
  settings_contains?: Maybe<String>;
  settings_not_contains?: Maybe<String>;
  settings_starts_with?: Maybe<String>;
  settings_not_starts_with?: Maybe<String>;
  settings_ends_with?: Maybe<String>;
  settings_not_ends_with?: Maybe<String>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  order?: Maybe<Int>;
  order_not?: Maybe<Int>;
  order_in?: Maybe<Int[] | Int>;
  order_not_in?: Maybe<Int[] | Int>;
  order_lt?: Maybe<Int>;
  order_lte?: Maybe<Int>;
  order_gt?: Maybe<Int>;
  order_gte?: Maybe<Int>;
  AND?: Maybe<WidgetScalarWhereInput[] | WidgetScalarWhereInput>;
  OR?: Maybe<WidgetScalarWhereInput[] | WidgetScalarWhereInput>;
  NOT?: Maybe<WidgetScalarWhereInput[] | WidgetScalarWhereInput>;
}

export interface WidgetSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<WidgetWhereInput>;
  AND?: Maybe<WidgetSubscriptionWhereInput[] | WidgetSubscriptionWhereInput>;
  OR?: Maybe<WidgetSubscriptionWhereInput[] | WidgetSubscriptionWhereInput>;
  NOT?: Maybe<WidgetSubscriptionWhereInput[] | WidgetSubscriptionWhereInput>;
}

export interface WidgetUpdateManyMutationInput {
  type?: Maybe<WidgetType>;
  settings?: Maybe<String>;
  title?: Maybe<String>;
  order?: Maybe<Int>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  name?: Maybe<String>;
  surname?: Maybe<String>;
  address?: Maybe<String>;
  refreshTime?: Maybe<Int>;
  backgroundImage?: Maybe<String>;
  sidebarDisabled?: Maybe<Boolean>;
  googleToken?: Maybe<String>;
  intraToken?: Maybe<String>;
  spotifyToken?: Maybe<String>;
  timezone?: Maybe<String>;
  phone?: Maybe<String>;
  type?: Maybe<UserType>;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  password?: Maybe<String>;
  name?: Maybe<String>;
  surname?: Maybe<String>;
  address?: Maybe<String>;
  refreshTime?: Maybe<Int>;
  backgroundImage?: Maybe<String>;
  sidebarDisabled?: Maybe<Boolean>;
  googleToken?: Maybe<String>;
  intraToken?: Maybe<String>;
  spotifyToken?: Maybe<String>;
  timezone?: Maybe<String>;
  widgets?: Maybe<WidgetUpdateManyInput>;
  phone?: Maybe<String>;
  type?: Maybe<UserType>;
}

export interface WidgetCreateInput {
  id?: Maybe<ID_Input>;
  type: WidgetType;
  settings: String;
  title: String;
  order: Int;
}

export interface WidgetCreateManyInput {
  create?: Maybe<WidgetCreateInput[] | WidgetCreateInput>;
  connect?: Maybe<WidgetWhereUniqueInput[] | WidgetWhereUniqueInput>;
}

export interface WidgetUpsertWithWhereUniqueNestedInput {
  where: WidgetWhereUniqueInput;
  update: WidgetUpdateDataInput;
  create: WidgetCreateInput;
}

export type WidgetWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface WidgetUpdateInput {
  type?: Maybe<WidgetType>;
  settings?: Maybe<String>;
  title?: Maybe<String>;
  order?: Maybe<Int>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  surname?: Maybe<String>;
  surname_not?: Maybe<String>;
  surname_in?: Maybe<String[] | String>;
  surname_not_in?: Maybe<String[] | String>;
  surname_lt?: Maybe<String>;
  surname_lte?: Maybe<String>;
  surname_gt?: Maybe<String>;
  surname_gte?: Maybe<String>;
  surname_contains?: Maybe<String>;
  surname_not_contains?: Maybe<String>;
  surname_starts_with?: Maybe<String>;
  surname_not_starts_with?: Maybe<String>;
  surname_ends_with?: Maybe<String>;
  surname_not_ends_with?: Maybe<String>;
  address?: Maybe<String>;
  address_not?: Maybe<String>;
  address_in?: Maybe<String[] | String>;
  address_not_in?: Maybe<String[] | String>;
  address_lt?: Maybe<String>;
  address_lte?: Maybe<String>;
  address_gt?: Maybe<String>;
  address_gte?: Maybe<String>;
  address_contains?: Maybe<String>;
  address_not_contains?: Maybe<String>;
  address_starts_with?: Maybe<String>;
  address_not_starts_with?: Maybe<String>;
  address_ends_with?: Maybe<String>;
  address_not_ends_with?: Maybe<String>;
  refreshTime?: Maybe<Int>;
  refreshTime_not?: Maybe<Int>;
  refreshTime_in?: Maybe<Int[] | Int>;
  refreshTime_not_in?: Maybe<Int[] | Int>;
  refreshTime_lt?: Maybe<Int>;
  refreshTime_lte?: Maybe<Int>;
  refreshTime_gt?: Maybe<Int>;
  refreshTime_gte?: Maybe<Int>;
  backgroundImage?: Maybe<String>;
  backgroundImage_not?: Maybe<String>;
  backgroundImage_in?: Maybe<String[] | String>;
  backgroundImage_not_in?: Maybe<String[] | String>;
  backgroundImage_lt?: Maybe<String>;
  backgroundImage_lte?: Maybe<String>;
  backgroundImage_gt?: Maybe<String>;
  backgroundImage_gte?: Maybe<String>;
  backgroundImage_contains?: Maybe<String>;
  backgroundImage_not_contains?: Maybe<String>;
  backgroundImage_starts_with?: Maybe<String>;
  backgroundImage_not_starts_with?: Maybe<String>;
  backgroundImage_ends_with?: Maybe<String>;
  backgroundImage_not_ends_with?: Maybe<String>;
  sidebarDisabled?: Maybe<Boolean>;
  sidebarDisabled_not?: Maybe<Boolean>;
  googleToken?: Maybe<String>;
  googleToken_not?: Maybe<String>;
  googleToken_in?: Maybe<String[] | String>;
  googleToken_not_in?: Maybe<String[] | String>;
  googleToken_lt?: Maybe<String>;
  googleToken_lte?: Maybe<String>;
  googleToken_gt?: Maybe<String>;
  googleToken_gte?: Maybe<String>;
  googleToken_contains?: Maybe<String>;
  googleToken_not_contains?: Maybe<String>;
  googleToken_starts_with?: Maybe<String>;
  googleToken_not_starts_with?: Maybe<String>;
  googleToken_ends_with?: Maybe<String>;
  googleToken_not_ends_with?: Maybe<String>;
  intraToken?: Maybe<String>;
  intraToken_not?: Maybe<String>;
  intraToken_in?: Maybe<String[] | String>;
  intraToken_not_in?: Maybe<String[] | String>;
  intraToken_lt?: Maybe<String>;
  intraToken_lte?: Maybe<String>;
  intraToken_gt?: Maybe<String>;
  intraToken_gte?: Maybe<String>;
  intraToken_contains?: Maybe<String>;
  intraToken_not_contains?: Maybe<String>;
  intraToken_starts_with?: Maybe<String>;
  intraToken_not_starts_with?: Maybe<String>;
  intraToken_ends_with?: Maybe<String>;
  intraToken_not_ends_with?: Maybe<String>;
  spotifyToken?: Maybe<String>;
  spotifyToken_not?: Maybe<String>;
  spotifyToken_in?: Maybe<String[] | String>;
  spotifyToken_not_in?: Maybe<String[] | String>;
  spotifyToken_lt?: Maybe<String>;
  spotifyToken_lte?: Maybe<String>;
  spotifyToken_gt?: Maybe<String>;
  spotifyToken_gte?: Maybe<String>;
  spotifyToken_contains?: Maybe<String>;
  spotifyToken_not_contains?: Maybe<String>;
  spotifyToken_starts_with?: Maybe<String>;
  spotifyToken_not_starts_with?: Maybe<String>;
  spotifyToken_ends_with?: Maybe<String>;
  spotifyToken_not_ends_with?: Maybe<String>;
  timezone?: Maybe<String>;
  timezone_not?: Maybe<String>;
  timezone_in?: Maybe<String[] | String>;
  timezone_not_in?: Maybe<String[] | String>;
  timezone_lt?: Maybe<String>;
  timezone_lte?: Maybe<String>;
  timezone_gt?: Maybe<String>;
  timezone_gte?: Maybe<String>;
  timezone_contains?: Maybe<String>;
  timezone_not_contains?: Maybe<String>;
  timezone_starts_with?: Maybe<String>;
  timezone_not_starts_with?: Maybe<String>;
  timezone_ends_with?: Maybe<String>;
  timezone_not_ends_with?: Maybe<String>;
  widgets_every?: Maybe<WidgetWhereInput>;
  widgets_some?: Maybe<WidgetWhereInput>;
  widgets_none?: Maybe<WidgetWhereInput>;
  phone?: Maybe<String>;
  phone_not?: Maybe<String>;
  phone_in?: Maybe<String[] | String>;
  phone_not_in?: Maybe<String[] | String>;
  phone_lt?: Maybe<String>;
  phone_lte?: Maybe<String>;
  phone_gt?: Maybe<String>;
  phone_gte?: Maybe<String>;
  phone_contains?: Maybe<String>;
  phone_not_contains?: Maybe<String>;
  phone_starts_with?: Maybe<String>;
  phone_not_starts_with?: Maybe<String>;
  phone_ends_with?: Maybe<String>;
  phone_not_ends_with?: Maybe<String>;
  type?: Maybe<UserType>;
  type_not?: Maybe<UserType>;
  type_in?: Maybe<UserType[] | UserType>;
  type_not_in?: Maybe<UserType[] | UserType>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface WidgetPreviousValues {
  id: ID_Output;
  type: WidgetType;
  settings: String;
  title: String;
  order: Int;
}

export interface WidgetPreviousValuesPromise
  extends Promise<WidgetPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  type: () => Promise<WidgetType>;
  settings: () => Promise<String>;
  title: () => Promise<String>;
  order: () => Promise<Int>;
}

export interface WidgetPreviousValuesSubscription
  extends Promise<AsyncIterator<WidgetPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  type: () => Promise<AsyncIterator<WidgetType>>;
  settings: () => Promise<AsyncIterator<String>>;
  title: () => Promise<AsyncIterator<String>>;
  order: () => Promise<AsyncIterator<Int>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Widget {
  id: ID_Output;
  type: WidgetType;
  settings: String;
  title: String;
  order: Int;
}

export interface WidgetPromise extends Promise<Widget>, Fragmentable {
  id: () => Promise<ID_Output>;
  type: () => Promise<WidgetType>;
  settings: () => Promise<String>;
  title: () => Promise<String>;
  order: () => Promise<Int>;
}

export interface WidgetSubscription
  extends Promise<AsyncIterator<Widget>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  type: () => Promise<AsyncIterator<WidgetType>>;
  settings: () => Promise<AsyncIterator<String>>;
  title: () => Promise<AsyncIterator<String>>;
  order: () => Promise<AsyncIterator<Int>>;
}

export interface WidgetNullablePromise
  extends Promise<Widget | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  type: () => Promise<WidgetType>;
  settings: () => Promise<String>;
  title: () => Promise<String>;
  order: () => Promise<Int>;
}

export interface WidgetSubscriptionPayload {
  mutation: MutationType;
  node: Widget;
  updatedFields: String[];
  previousValues: WidgetPreviousValues;
}

export interface WidgetSubscriptionPayloadPromise
  extends Promise<WidgetSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = WidgetPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = WidgetPreviousValuesPromise>() => T;
}

export interface WidgetSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<WidgetSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = WidgetSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = WidgetPreviousValuesSubscription>() => T;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  password: String;
  name: String;
  surname: String;
  address?: String;
  refreshTime?: Int;
  backgroundImage?: String;
  sidebarDisabled?: Boolean;
  googleToken?: String;
  intraToken?: String;
  spotifyToken?: String;
  timezone?: String;
  phone: String;
  type?: UserType;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
  surname: () => Promise<String>;
  address: () => Promise<String>;
  refreshTime: () => Promise<Int>;
  backgroundImage: () => Promise<String>;
  sidebarDisabled: () => Promise<Boolean>;
  googleToken: () => Promise<String>;
  intraToken: () => Promise<String>;
  spotifyToken: () => Promise<String>;
  timezone: () => Promise<String>;
  phone: () => Promise<String>;
  type: () => Promise<UserType>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  surname: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  refreshTime: () => Promise<AsyncIterator<Int>>;
  backgroundImage: () => Promise<AsyncIterator<String>>;
  sidebarDisabled: () => Promise<AsyncIterator<Boolean>>;
  googleToken: () => Promise<AsyncIterator<String>>;
  intraToken: () => Promise<AsyncIterator<String>>;
  spotifyToken: () => Promise<AsyncIterator<String>>;
  timezone: () => Promise<AsyncIterator<String>>;
  phone: () => Promise<AsyncIterator<String>>;
  type: () => Promise<AsyncIterator<UserType>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateWidget {
  count: Int;
}

export interface AggregateWidgetPromise
  extends Promise<AggregateWidget>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateWidgetSubscription
  extends Promise<AsyncIterator<AggregateWidget>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  email: String;
  password: String;
  name: String;
  surname: String;
  address?: String;
  refreshTime?: Int;
  backgroundImage?: String;
  sidebarDisabled?: Boolean;
  googleToken?: String;
  intraToken?: String;
  spotifyToken?: String;
  timezone?: String;
  phone: String;
  type?: UserType;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
  surname: () => Promise<String>;
  address: () => Promise<String>;
  refreshTime: () => Promise<Int>;
  backgroundImage: () => Promise<String>;
  sidebarDisabled: () => Promise<Boolean>;
  googleToken: () => Promise<String>;
  intraToken: () => Promise<String>;
  spotifyToken: () => Promise<String>;
  timezone: () => Promise<String>;
  widgets: <T = FragmentableArray<Widget>>(args?: {
    where?: WidgetWhereInput;
    orderBy?: WidgetOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  phone: () => Promise<String>;
  type: () => Promise<UserType>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  surname: () => Promise<AsyncIterator<String>>;
  address: () => Promise<AsyncIterator<String>>;
  refreshTime: () => Promise<AsyncIterator<Int>>;
  backgroundImage: () => Promise<AsyncIterator<String>>;
  sidebarDisabled: () => Promise<AsyncIterator<Boolean>>;
  googleToken: () => Promise<AsyncIterator<String>>;
  intraToken: () => Promise<AsyncIterator<String>>;
  spotifyToken: () => Promise<AsyncIterator<String>>;
  timezone: () => Promise<AsyncIterator<String>>;
  widgets: <T = Promise<AsyncIterator<WidgetSubscription>>>(args?: {
    where?: WidgetWhereInput;
    orderBy?: WidgetOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  phone: () => Promise<AsyncIterator<String>>;
  type: () => Promise<AsyncIterator<UserType>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  name: () => Promise<String>;
  surname: () => Promise<String>;
  address: () => Promise<String>;
  refreshTime: () => Promise<Int>;
  backgroundImage: () => Promise<String>;
  sidebarDisabled: () => Promise<Boolean>;
  googleToken: () => Promise<String>;
  intraToken: () => Promise<String>;
  spotifyToken: () => Promise<String>;
  timezone: () => Promise<String>;
  widgets: <T = FragmentableArray<Widget>>(args?: {
    where?: WidgetWhereInput;
    orderBy?: WidgetOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
  phone: () => Promise<String>;
  type: () => Promise<UserType>;
}

export interface WidgetEdge {
  node: Widget;
  cursor: String;
}

export interface WidgetEdgePromise extends Promise<WidgetEdge>, Fragmentable {
  node: <T = WidgetPromise>() => T;
  cursor: () => Promise<String>;
}

export interface WidgetEdgeSubscription
  extends Promise<AsyncIterator<WidgetEdge>>,
    Fragmentable {
  node: <T = WidgetSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface WidgetConnection {
  pageInfo: PageInfo;
  edges: WidgetEdge[];
}

export interface WidgetConnectionPromise
  extends Promise<WidgetConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<WidgetEdge>>() => T;
  aggregate: <T = AggregateWidgetPromise>() => T;
}

export interface WidgetConnectionSubscription
  extends Promise<AsyncIterator<WidgetConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<WidgetEdgeSubscription>>>() => T;
  aggregate: <T = AggregateWidgetSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "UserType",
    embedded: false
  },
  {
    name: "WidgetType",
    embedded: false
  },
  {
    name: "Widget",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://prisma:4466`
});
export const prisma = new Prisma();
