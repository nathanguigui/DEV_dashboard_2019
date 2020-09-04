/**
 * This file was automatically generated by Nexus 0.11.7
 * Do not make changes to this file directly
 */

import * as types from "../types"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  UpdateMeInput: { // input type
    address?: string | null; // String
    backgroundImage?: string | null; // String
    email?: string | null; // String
    googleToken?: string | null; // String
    intraToken?: string | null; // String
    phone?: string | null; // String
    refreshTime?: number | null; // Int
    sidebarDisabled?: boolean | null; // Boolean
    spotifyToken?: string | null; // String
    surname?: string | null; // String
    timezone?: string | null; // String
    widgets?: NexusGenInputs['UpdateMeWidgetsInput'] | null; // UpdateMeWidgetsInput
  }
  UpdateMeWidgetsInput: { // input type
    connect?: NexusGenInputs['WidgetWhereUniqueInput'][] | null; // [WidgetWhereUniqueInput!]
    disconnect?: NexusGenInputs['WidgetWhereUniqueInput'][] | null; // [WidgetWhereUniqueInput!]
  }
  UserWhereInput: { // input type
    address?: string | null; // String
    address_contains?: string | null; // String
    address_ends_with?: string | null; // String
    address_gt?: string | null; // String
    address_gte?: string | null; // String
    address_in?: string[] | null; // [String!]
    address_lt?: string | null; // String
    address_lte?: string | null; // String
    address_not?: string | null; // String
    address_not_contains?: string | null; // String
    address_not_ends_with?: string | null; // String
    address_not_in?: string[] | null; // [String!]
    address_not_starts_with?: string | null; // String
    address_starts_with?: string | null; // String
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    backgroundImage?: string | null; // String
    backgroundImage_contains?: string | null; // String
    backgroundImage_ends_with?: string | null; // String
    backgroundImage_gt?: string | null; // String
    backgroundImage_gte?: string | null; // String
    backgroundImage_in?: string[] | null; // [String!]
    backgroundImage_lt?: string | null; // String
    backgroundImage_lte?: string | null; // String
    backgroundImage_not?: string | null; // String
    backgroundImage_not_contains?: string | null; // String
    backgroundImage_not_ends_with?: string | null; // String
    backgroundImage_not_in?: string[] | null; // [String!]
    backgroundImage_not_starts_with?: string | null; // String
    backgroundImage_starts_with?: string | null; // String
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    googleToken?: string | null; // String
    googleToken_contains?: string | null; // String
    googleToken_ends_with?: string | null; // String
    googleToken_gt?: string | null; // String
    googleToken_gte?: string | null; // String
    googleToken_in?: string[] | null; // [String!]
    googleToken_lt?: string | null; // String
    googleToken_lte?: string | null; // String
    googleToken_not?: string | null; // String
    googleToken_not_contains?: string | null; // String
    googleToken_not_ends_with?: string | null; // String
    googleToken_not_in?: string[] | null; // [String!]
    googleToken_not_starts_with?: string | null; // String
    googleToken_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    intraToken?: string | null; // String
    intraToken_contains?: string | null; // String
    intraToken_ends_with?: string | null; // String
    intraToken_gt?: string | null; // String
    intraToken_gte?: string | null; // String
    intraToken_in?: string[] | null; // [String!]
    intraToken_lt?: string | null; // String
    intraToken_lte?: string | null; // String
    intraToken_not?: string | null; // String
    intraToken_not_contains?: string | null; // String
    intraToken_not_ends_with?: string | null; // String
    intraToken_not_in?: string[] | null; // [String!]
    intraToken_not_starts_with?: string | null; // String
    intraToken_starts_with?: string | null; // String
    name?: string | null; // String
    name_contains?: string | null; // String
    name_ends_with?: string | null; // String
    name_gt?: string | null; // String
    name_gte?: string | null; // String
    name_in?: string[] | null; // [String!]
    name_lt?: string | null; // String
    name_lte?: string | null; // String
    name_not?: string | null; // String
    name_not_contains?: string | null; // String
    name_not_ends_with?: string | null; // String
    name_not_in?: string[] | null; // [String!]
    name_not_starts_with?: string | null; // String
    name_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    password?: string | null; // String
    password_contains?: string | null; // String
    password_ends_with?: string | null; // String
    password_gt?: string | null; // String
    password_gte?: string | null; // String
    password_in?: string[] | null; // [String!]
    password_lt?: string | null; // String
    password_lte?: string | null; // String
    password_not?: string | null; // String
    password_not_contains?: string | null; // String
    password_not_ends_with?: string | null; // String
    password_not_in?: string[] | null; // [String!]
    password_not_starts_with?: string | null; // String
    password_starts_with?: string | null; // String
    phone?: string | null; // String
    phone_contains?: string | null; // String
    phone_ends_with?: string | null; // String
    phone_gt?: string | null; // String
    phone_gte?: string | null; // String
    phone_in?: string[] | null; // [String!]
    phone_lt?: string | null; // String
    phone_lte?: string | null; // String
    phone_not?: string | null; // String
    phone_not_contains?: string | null; // String
    phone_not_ends_with?: string | null; // String
    phone_not_in?: string[] | null; // [String!]
    phone_not_starts_with?: string | null; // String
    phone_starts_with?: string | null; // String
    refreshTime?: number | null; // Int
    refreshTime_gt?: number | null; // Int
    refreshTime_gte?: number | null; // Int
    refreshTime_in?: number[] | null; // [Int!]
    refreshTime_lt?: number | null; // Int
    refreshTime_lte?: number | null; // Int
    refreshTime_not?: number | null; // Int
    refreshTime_not_in?: number[] | null; // [Int!]
    sidebarDisabled?: boolean | null; // Boolean
    sidebarDisabled_not?: boolean | null; // Boolean
    spotifyToken?: string | null; // String
    spotifyToken_contains?: string | null; // String
    spotifyToken_ends_with?: string | null; // String
    spotifyToken_gt?: string | null; // String
    spotifyToken_gte?: string | null; // String
    spotifyToken_in?: string[] | null; // [String!]
    spotifyToken_lt?: string | null; // String
    spotifyToken_lte?: string | null; // String
    spotifyToken_not?: string | null; // String
    spotifyToken_not_contains?: string | null; // String
    spotifyToken_not_ends_with?: string | null; // String
    spotifyToken_not_in?: string[] | null; // [String!]
    spotifyToken_not_starts_with?: string | null; // String
    spotifyToken_starts_with?: string | null; // String
    surname?: string | null; // String
    surname_contains?: string | null; // String
    surname_ends_with?: string | null; // String
    surname_gt?: string | null; // String
    surname_gte?: string | null; // String
    surname_in?: string[] | null; // [String!]
    surname_lt?: string | null; // String
    surname_lte?: string | null; // String
    surname_not?: string | null; // String
    surname_not_contains?: string | null; // String
    surname_not_ends_with?: string | null; // String
    surname_not_in?: string[] | null; // [String!]
    surname_not_starts_with?: string | null; // String
    surname_starts_with?: string | null; // String
    timezone?: string | null; // String
    timezone_contains?: string | null; // String
    timezone_ends_with?: string | null; // String
    timezone_gt?: string | null; // String
    timezone_gte?: string | null; // String
    timezone_in?: string[] | null; // [String!]
    timezone_lt?: string | null; // String
    timezone_lte?: string | null; // String
    timezone_not?: string | null; // String
    timezone_not_contains?: string | null; // String
    timezone_not_ends_with?: string | null; // String
    timezone_not_in?: string[] | null; // [String!]
    timezone_not_starts_with?: string | null; // String
    timezone_starts_with?: string | null; // String
    type?: NexusGenEnums['UserType'] | null; // UserType
    type_in?: NexusGenEnums['UserType'][] | null; // [UserType!]
    type_not?: NexusGenEnums['UserType'] | null; // UserType
    type_not_in?: NexusGenEnums['UserType'][] | null; // [UserType!]
    widgets_every?: NexusGenInputs['WidgetWhereInput'] | null; // WidgetWhereInput
    widgets_none?: NexusGenInputs['WidgetWhereInput'] | null; // WidgetWhereInput
    widgets_some?: NexusGenInputs['WidgetWhereInput'] | null; // WidgetWhereInput
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
    phone?: string | null; // String
  }
  WidgetCreateInput: { // input type
    id?: string | null; // ID
    settings: string; // String!
    title: string; // String!
    type: NexusGenEnums['WidgetType']; // WidgetType!
  }
  WidgetUpdateInput: { // input type
    settings?: string | null; // String
    title?: string | null; // String
    type?: NexusGenEnums['WidgetType'] | null; // WidgetType
  }
  WidgetWhereInput: { // input type
    AND?: NexusGenInputs['WidgetWhereInput'][] | null; // [WidgetWhereInput!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['WidgetWhereInput'][] | null; // [WidgetWhereInput!]
    OR?: NexusGenInputs['WidgetWhereInput'][] | null; // [WidgetWhereInput!]
    settings?: string | null; // String
    settings_contains?: string | null; // String
    settings_ends_with?: string | null; // String
    settings_gt?: string | null; // String
    settings_gte?: string | null; // String
    settings_in?: string[] | null; // [String!]
    settings_lt?: string | null; // String
    settings_lte?: string | null; // String
    settings_not?: string | null; // String
    settings_not_contains?: string | null; // String
    settings_not_ends_with?: string | null; // String
    settings_not_in?: string[] | null; // [String!]
    settings_not_starts_with?: string | null; // String
    settings_starts_with?: string | null; // String
    title?: string | null; // String
    title_contains?: string | null; // String
    title_ends_with?: string | null; // String
    title_gt?: string | null; // String
    title_gte?: string | null; // String
    title_in?: string[] | null; // [String!]
    title_lt?: string | null; // String
    title_lte?: string | null; // String
    title_not?: string | null; // String
    title_not_contains?: string | null; // String
    title_not_ends_with?: string | null; // String
    title_not_in?: string[] | null; // [String!]
    title_not_starts_with?: string | null; // String
    title_starts_with?: string | null; // String
    type?: NexusGenEnums['WidgetType'] | null; // WidgetType
    type_in?: NexusGenEnums['WidgetType'][] | null; // [WidgetType!]
    type_not?: NexusGenEnums['WidgetType'] | null; // WidgetType
    type_not_in?: NexusGenEnums['WidgetType'][] | null; // [WidgetType!]
  }
  WidgetWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  UserOrderByInput: "address_ASC" | "address_DESC" | "backgroundImage_ASC" | "backgroundImage_DESC" | "createdAt_ASC" | "createdAt_DESC" | "email_ASC" | "email_DESC" | "googleToken_ASC" | "googleToken_DESC" | "id_ASC" | "id_DESC" | "intraToken_ASC" | "intraToken_DESC" | "name_ASC" | "name_DESC" | "password_ASC" | "password_DESC" | "phone_ASC" | "phone_DESC" | "refreshTime_ASC" | "refreshTime_DESC" | "sidebarDisabled_ASC" | "sidebarDisabled_DESC" | "spotifyToken_ASC" | "spotifyToken_DESC" | "surname_ASC" | "surname_DESC" | "timezone_ASC" | "timezone_DESC" | "type_ASC" | "type_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserType: "ADMIN" | "USER"
  WidgetOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "settings_ASC" | "settings_DESC" | "title_ASC" | "title_DESC" | "type_ASC" | "type_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  WidgetType: "WORLD_TIME"
}

export interface NexusGenRootTypes {
  AggregateUser: { // root type
    count: number; // Int!
  }
  AggregateWidget: { // root type
    count: number; // Int!
  }
  AuthPayload: { // root type
    token?: string | null; // String
    User?: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  User: { // root type
    address?: string | null; // String
    backgroundImage?: string | null; // String
    email: string; // String!
    googleToken?: string | null; // String
    id: string; // ID!
    intraToken?: string | null; // String
    name: string; // String!
    phone: string; // String!
    refreshTime?: number | null; // Int
    sidebarDisabled?: boolean | null; // Boolean
    spotifyToken?: string | null; // String
    surname: string; // String!
    timezone?: string | null; // String
    type?: NexusGenEnums['UserType'] | null; // UserType
  }
  UserConnection: { // root type
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  Widget: { // root type
    id: string; // ID!
    settings: string; // String!
    title: string; // String!
    type: NexusGenEnums['WidgetType']; // WidgetType!
  }
  WidgetConnection: { // root type
    edges: NexusGenRootTypes['WidgetEdge'][]; // [WidgetEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  WidgetEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Widget']; // Widget!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  UpdateMeInput: NexusGenInputs['UpdateMeInput'];
  UpdateMeWidgetsInput: NexusGenInputs['UpdateMeWidgetsInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  WidgetCreateInput: NexusGenInputs['WidgetCreateInput'];
  WidgetUpdateInput: NexusGenInputs['WidgetUpdateInput'];
  WidgetWhereInput: NexusGenInputs['WidgetWhereInput'];
  WidgetWhereUniqueInput: NexusGenInputs['WidgetWhereUniqueInput'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
  UserType: NexusGenEnums['UserType'];
  WidgetOrderByInput: NexusGenEnums['WidgetOrderByInput'];
  WidgetType: NexusGenEnums['WidgetType'];
}

export interface NexusGenFieldTypes {
  AggregateUser: { // field return type
    count: number; // Int!
  }
  AggregateWidget: { // field return type
    count: number; // Int!
  }
  AuthPayload: { // field return type
    token: string | null; // String
    User: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: { // field return type
    createWidget: NexusGenRootTypes['Widget']; // Widget!
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    updateMe: NexusGenRootTypes['User'] | null; // User
    updateWidget: NexusGenRootTypes['Widget'] | null; // Widget
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    me: NexusGenRootTypes['User'] | null; // User
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
    usersConnection: NexusGenRootTypes['UserConnection']; // UserConnection!
    widget: NexusGenRootTypes['Widget'] | null; // Widget
    widgets: NexusGenRootTypes['Widget'][]; // [Widget!]!
    widgetsConnection: NexusGenRootTypes['WidgetConnection']; // WidgetConnection!
  }
  User: { // field return type
    address: string | null; // String
    backgroundImage: string | null; // String
    email: string; // String!
    googleToken: string | null; // String
    id: string; // ID!
    intraToken: string | null; // String
    name: string; // String!
    phone: string; // String!
    refreshTime: number | null; // Int
    sidebarDisabled: boolean | null; // Boolean
    spotifyToken: string | null; // String
    surname: string; // String!
    timezone: string | null; // String
    type: NexusGenEnums['UserType'] | null; // UserType
    widgets: NexusGenRootTypes['Widget'][] | null; // [Widget!]
  }
  UserConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateUser']; // AggregateUser!
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  Widget: { // field return type
    id: string; // ID!
    settings: string; // String!
    title: string; // String!
    type: NexusGenEnums['WidgetType']; // WidgetType!
  }
  WidgetConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateWidget']; // AggregateWidget!
    edges: NexusGenRootTypes['WidgetEdge'][]; // [WidgetEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  WidgetEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Widget']; // Widget!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createWidget: { // args
      data: NexusGenInputs['WidgetCreateInput']; // WidgetCreateInput!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    signup: { // args
      address?: string | null; // String
      email: string; // String!
      name: string; // String!
      password: string; // String!
      phone: string; // String!
      surname: string; // String!
    }
    updateMe: { // args
      data: NexusGenInputs['UpdateMeInput']; // UpdateMeInput!
    }
    updateWidget: { // args
      data: NexusGenInputs['WidgetUpdateInput']; // WidgetUpdateInput!
      where: NexusGenInputs['WidgetWhereUniqueInput']; // WidgetWhereUniqueInput!
    }
  }
  Query: {
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    usersConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    widget: { // args
      where: NexusGenInputs['WidgetWhereUniqueInput']; // WidgetWhereUniqueInput!
    }
    widgets: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['WidgetOrderByInput'] | null; // WidgetOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['WidgetWhereInput'] | null; // WidgetWhereInput
    }
    widgetsConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['WidgetOrderByInput'] | null; // WidgetOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['WidgetWhereInput'] | null; // WidgetWhereInput
    }
  }
  User: {
    widgets: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['WidgetOrderByInput'] | null; // WidgetOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['WidgetWhereInput'] | null; // WidgetWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AggregateUser" | "AggregateWidget" | "AuthPayload" | "Mutation" | "PageInfo" | "Query" | "User" | "UserConnection" | "UserEdge" | "Widget" | "WidgetConnection" | "WidgetEdge";

export type NexusGenInputNames = "UpdateMeInput" | "UpdateMeWidgetsInput" | "UserWhereInput" | "UserWhereUniqueInput" | "WidgetCreateInput" | "WidgetUpdateInput" | "WidgetWhereInput" | "WidgetWhereUniqueInput";

export type NexusGenEnumNames = "UserOrderByInput" | "UserType" | "WidgetOrderByInput" | "WidgetType";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: types.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}