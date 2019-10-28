import gql from "graphql-tag";
import {AuthPayload} from "../types";

export interface SignupMutationsVars {
    name: string,
    surname: string,
    email: string,
    password: string,
    address: string,
    phone: string,
}

export interface SignupMutationData {
    signup: AuthPayload
}

export const SIGNUP_MUTATION = gql`
    mutation signup($name: String!, $surname: String!, $email: String!, $password: String!, $address: String!, $phone: String!) {
        signup(name: $name, surname: $surname, email: $email, password: $password, address: $address, phone: $phone) {
            token,
        }
    }
`;
