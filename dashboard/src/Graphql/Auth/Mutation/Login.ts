import gql from "graphql-tag";
import {AuthPayload} from "../types";

export interface LoginMutationsVars {
    email: string,
    password: string
}

export interface LoginMutationData {
    login: AuthPayload
}

export const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;
