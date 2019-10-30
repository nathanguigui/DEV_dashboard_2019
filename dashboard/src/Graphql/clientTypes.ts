export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AggregateUser = {
  __typename?: 'AggregateUser',
  count: Scalars['Int'],
};

export type AuthPayload = {
  __typename?: 'AuthPayload',
  token?: Maybe<Scalars['String']>,
  User?: Maybe<User>,
};

export type Mutation = {
  __typename?: 'Mutation',
  signup?: Maybe<AuthPayload>,
  login?: Maybe<AuthPayload>,
  updateMe?: Maybe<User>,
};


export type MutationSignupArgs = {
  name: Scalars['String'],
  surname: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  address?: Maybe<Scalars['String']>,
  phone: Scalars['String']
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationUpdateMeArgs = {
  data: UpdateMeInput
};

export type PageInfo = {
  __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Query = {
  __typename?: 'Query',
  me?: Maybe<User>,
  user?: Maybe<User>,
  users: Array<User>,
  usersConnection: UserConnection,
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>,
  orderBy?: Maybe<UserOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UpdateMeInput = {
  email?: Maybe<Scalars['String']>,
  surname?: Maybe<Scalars['String']>,
  address?: Maybe<Scalars['String']>,
  refreshTime?: Maybe<Scalars['Int']>,
  backgroundImage?: Maybe<Scalars['String']>,
  googleToken?: Maybe<Scalars['String']>,
  intraToken?: Maybe<Scalars['String']>,
  sidebarDisabled?: Maybe<Scalars['Boolean']>,
  phone?: Maybe<Scalars['String']>,
  spotifyToken?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
};

export type User = {
  __typename?: 'User',
  id: Scalars['ID'],
  email: Scalars['String'],
  name: Scalars['String'],
  surname: Scalars['String'],
  address?: Maybe<Scalars['String']>,
  phone: Scalars['String'],
  type?: Maybe<UserType>,
  refreshTime?: Maybe<Scalars['Int']>,
  backgroundImage?: Maybe<Scalars['String']>,
  sidebarDisabled?: Maybe<Scalars['Boolean']>,
  googleToken?: Maybe<Scalars['String']>,
  intraToken?: Maybe<Scalars['String']>,
  spotifyToken?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
};

export type UserConnection = {
  __typename?: 'UserConnection',
  pageInfo: PageInfo,
  edges: Array<UserEdge>,
  aggregate: AggregateUser,
};

export type UserEdge = {
  __typename?: 'UserEdge',
  node: User,
  cursor: Scalars['String'],
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SurnameAsc = 'surname_ASC',
  SurnameDesc = 'surname_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  RefreshTimeAsc = 'refreshTime_ASC',
  RefreshTimeDesc = 'refreshTime_DESC',
  BackgroundImageAsc = 'backgroundImage_ASC',
  BackgroundImageDesc = 'backgroundImage_DESC',
  SidebarDisabledAsc = 'sidebarDisabled_ASC',
  SidebarDisabledDesc = 'sidebarDisabled_DESC',
  GoogleTokenAsc = 'googleToken_ASC',
  GoogleTokenDesc = 'googleToken_DESC',
  IntraTokenAsc = 'intraToken_ASC',
  IntraTokenDesc = 'intraToken_DESC',
  SpotifyTokenAsc = 'spotifyToken_ASC',
  SpotifyTokenDesc = 'spotifyToken_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export enum UserType {
  Admin = 'ADMIN',
  User = 'USER'
}

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>,
  id_not?: Maybe<Scalars['ID']>,
  id_in?: Maybe<Array<Scalars['ID']>>,
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  id_lt?: Maybe<Scalars['ID']>,
  id_lte?: Maybe<Scalars['ID']>,
  id_gt?: Maybe<Scalars['ID']>,
  id_gte?: Maybe<Scalars['ID']>,
  id_contains?: Maybe<Scalars['ID']>,
  id_not_contains?: Maybe<Scalars['ID']>,
  id_starts_with?: Maybe<Scalars['ID']>,
  id_not_starts_with?: Maybe<Scalars['ID']>,
  id_ends_with?: Maybe<Scalars['ID']>,
  id_not_ends_with?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  email_not?: Maybe<Scalars['String']>,
  email_in?: Maybe<Array<Scalars['String']>>,
  email_not_in?: Maybe<Array<Scalars['String']>>,
  email_lt?: Maybe<Scalars['String']>,
  email_lte?: Maybe<Scalars['String']>,
  email_gt?: Maybe<Scalars['String']>,
  email_gte?: Maybe<Scalars['String']>,
  email_contains?: Maybe<Scalars['String']>,
  email_not_contains?: Maybe<Scalars['String']>,
  email_starts_with?: Maybe<Scalars['String']>,
  email_not_starts_with?: Maybe<Scalars['String']>,
  email_ends_with?: Maybe<Scalars['String']>,
  email_not_ends_with?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  password_not?: Maybe<Scalars['String']>,
  password_in?: Maybe<Array<Scalars['String']>>,
  password_not_in?: Maybe<Array<Scalars['String']>>,
  password_lt?: Maybe<Scalars['String']>,
  password_lte?: Maybe<Scalars['String']>,
  password_gt?: Maybe<Scalars['String']>,
  password_gte?: Maybe<Scalars['String']>,
  password_contains?: Maybe<Scalars['String']>,
  password_not_contains?: Maybe<Scalars['String']>,
  password_starts_with?: Maybe<Scalars['String']>,
  password_not_starts_with?: Maybe<Scalars['String']>,
  password_ends_with?: Maybe<Scalars['String']>,
  password_not_ends_with?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  name_not?: Maybe<Scalars['String']>,
  name_in?: Maybe<Array<Scalars['String']>>,
  name_not_in?: Maybe<Array<Scalars['String']>>,
  name_lt?: Maybe<Scalars['String']>,
  name_lte?: Maybe<Scalars['String']>,
  name_gt?: Maybe<Scalars['String']>,
  name_gte?: Maybe<Scalars['String']>,
  name_contains?: Maybe<Scalars['String']>,
  name_not_contains?: Maybe<Scalars['String']>,
  name_starts_with?: Maybe<Scalars['String']>,
  name_not_starts_with?: Maybe<Scalars['String']>,
  name_ends_with?: Maybe<Scalars['String']>,
  name_not_ends_with?: Maybe<Scalars['String']>,
  surname?: Maybe<Scalars['String']>,
  surname_not?: Maybe<Scalars['String']>,
  surname_in?: Maybe<Array<Scalars['String']>>,
  surname_not_in?: Maybe<Array<Scalars['String']>>,
  surname_lt?: Maybe<Scalars['String']>,
  surname_lte?: Maybe<Scalars['String']>,
  surname_gt?: Maybe<Scalars['String']>,
  surname_gte?: Maybe<Scalars['String']>,
  surname_contains?: Maybe<Scalars['String']>,
  surname_not_contains?: Maybe<Scalars['String']>,
  surname_starts_with?: Maybe<Scalars['String']>,
  surname_not_starts_with?: Maybe<Scalars['String']>,
  surname_ends_with?: Maybe<Scalars['String']>,
  surname_not_ends_with?: Maybe<Scalars['String']>,
  address?: Maybe<Scalars['String']>,
  address_not?: Maybe<Scalars['String']>,
  address_in?: Maybe<Array<Scalars['String']>>,
  address_not_in?: Maybe<Array<Scalars['String']>>,
  address_lt?: Maybe<Scalars['String']>,
  address_lte?: Maybe<Scalars['String']>,
  address_gt?: Maybe<Scalars['String']>,
  address_gte?: Maybe<Scalars['String']>,
  address_contains?: Maybe<Scalars['String']>,
  address_not_contains?: Maybe<Scalars['String']>,
  address_starts_with?: Maybe<Scalars['String']>,
  address_not_starts_with?: Maybe<Scalars['String']>,
  address_ends_with?: Maybe<Scalars['String']>,
  address_not_ends_with?: Maybe<Scalars['String']>,
  refreshTime?: Maybe<Scalars['Int']>,
  refreshTime_not?: Maybe<Scalars['Int']>,
  refreshTime_in?: Maybe<Array<Scalars['Int']>>,
  refreshTime_not_in?: Maybe<Array<Scalars['Int']>>,
  refreshTime_lt?: Maybe<Scalars['Int']>,
  refreshTime_lte?: Maybe<Scalars['Int']>,
  refreshTime_gt?: Maybe<Scalars['Int']>,
  refreshTime_gte?: Maybe<Scalars['Int']>,
  backgroundImage?: Maybe<Scalars['String']>,
  backgroundImage_not?: Maybe<Scalars['String']>,
  backgroundImage_in?: Maybe<Array<Scalars['String']>>,
  backgroundImage_not_in?: Maybe<Array<Scalars['String']>>,
  backgroundImage_lt?: Maybe<Scalars['String']>,
  backgroundImage_lte?: Maybe<Scalars['String']>,
  backgroundImage_gt?: Maybe<Scalars['String']>,
  backgroundImage_gte?: Maybe<Scalars['String']>,
  backgroundImage_contains?: Maybe<Scalars['String']>,
  backgroundImage_not_contains?: Maybe<Scalars['String']>,
  backgroundImage_starts_with?: Maybe<Scalars['String']>,
  backgroundImage_not_starts_with?: Maybe<Scalars['String']>,
  backgroundImage_ends_with?: Maybe<Scalars['String']>,
  backgroundImage_not_ends_with?: Maybe<Scalars['String']>,
  sidebarDisabled?: Maybe<Scalars['Boolean']>,
  sidebarDisabled_not?: Maybe<Scalars['Boolean']>,
  googleToken?: Maybe<Scalars['String']>,
  googleToken_not?: Maybe<Scalars['String']>,
  googleToken_in?: Maybe<Array<Scalars['String']>>,
  googleToken_not_in?: Maybe<Array<Scalars['String']>>,
  googleToken_lt?: Maybe<Scalars['String']>,
  googleToken_lte?: Maybe<Scalars['String']>,
  googleToken_gt?: Maybe<Scalars['String']>,
  googleToken_gte?: Maybe<Scalars['String']>,
  googleToken_contains?: Maybe<Scalars['String']>,
  googleToken_not_contains?: Maybe<Scalars['String']>,
  googleToken_starts_with?: Maybe<Scalars['String']>,
  googleToken_not_starts_with?: Maybe<Scalars['String']>,
  googleToken_ends_with?: Maybe<Scalars['String']>,
  googleToken_not_ends_with?: Maybe<Scalars['String']>,
  intraToken?: Maybe<Scalars['String']>,
  intraToken_not?: Maybe<Scalars['String']>,
  intraToken_in?: Maybe<Array<Scalars['String']>>,
  intraToken_not_in?: Maybe<Array<Scalars['String']>>,
  intraToken_lt?: Maybe<Scalars['String']>,
  intraToken_lte?: Maybe<Scalars['String']>,
  intraToken_gt?: Maybe<Scalars['String']>,
  intraToken_gte?: Maybe<Scalars['String']>,
  intraToken_contains?: Maybe<Scalars['String']>,
  intraToken_not_contains?: Maybe<Scalars['String']>,
  intraToken_starts_with?: Maybe<Scalars['String']>,
  intraToken_not_starts_with?: Maybe<Scalars['String']>,
  intraToken_ends_with?: Maybe<Scalars['String']>,
  intraToken_not_ends_with?: Maybe<Scalars['String']>,
  spotifyToken?: Maybe<Scalars['String']>,
  spotifyToken_not?: Maybe<Scalars['String']>,
  spotifyToken_in?: Maybe<Array<Scalars['String']>>,
  spotifyToken_not_in?: Maybe<Array<Scalars['String']>>,
  spotifyToken_lt?: Maybe<Scalars['String']>,
  spotifyToken_lte?: Maybe<Scalars['String']>,
  spotifyToken_gt?: Maybe<Scalars['String']>,
  spotifyToken_gte?: Maybe<Scalars['String']>,
  spotifyToken_contains?: Maybe<Scalars['String']>,
  spotifyToken_not_contains?: Maybe<Scalars['String']>,
  spotifyToken_starts_with?: Maybe<Scalars['String']>,
  spotifyToken_not_starts_with?: Maybe<Scalars['String']>,
  spotifyToken_ends_with?: Maybe<Scalars['String']>,
  spotifyToken_not_ends_with?: Maybe<Scalars['String']>,
  timezone?: Maybe<Scalars['String']>,
  timezone_not?: Maybe<Scalars['String']>,
  timezone_in?: Maybe<Array<Scalars['String']>>,
  timezone_not_in?: Maybe<Array<Scalars['String']>>,
  timezone_lt?: Maybe<Scalars['String']>,
  timezone_lte?: Maybe<Scalars['String']>,
  timezone_gt?: Maybe<Scalars['String']>,
  timezone_gte?: Maybe<Scalars['String']>,
  timezone_contains?: Maybe<Scalars['String']>,
  timezone_not_contains?: Maybe<Scalars['String']>,
  timezone_starts_with?: Maybe<Scalars['String']>,
  timezone_not_starts_with?: Maybe<Scalars['String']>,
  timezone_ends_with?: Maybe<Scalars['String']>,
  timezone_not_ends_with?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
  phone_not?: Maybe<Scalars['String']>,
  phone_in?: Maybe<Array<Scalars['String']>>,
  phone_not_in?: Maybe<Array<Scalars['String']>>,
  phone_lt?: Maybe<Scalars['String']>,
  phone_lte?: Maybe<Scalars['String']>,
  phone_gt?: Maybe<Scalars['String']>,
  phone_gte?: Maybe<Scalars['String']>,
  phone_contains?: Maybe<Scalars['String']>,
  phone_not_contains?: Maybe<Scalars['String']>,
  phone_starts_with?: Maybe<Scalars['String']>,
  phone_not_starts_with?: Maybe<Scalars['String']>,
  phone_ends_with?: Maybe<Scalars['String']>,
  phone_not_ends_with?: Maybe<Scalars['String']>,
  type?: Maybe<UserType>,
  type_not?: Maybe<UserType>,
  type_in?: Maybe<Array<UserType>>,
  type_not_in?: Maybe<Array<UserType>>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  email?: Maybe<Scalars['String']>,
  phone?: Maybe<Scalars['String']>,
};
