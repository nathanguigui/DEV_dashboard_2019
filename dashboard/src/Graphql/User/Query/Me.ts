import {Query} from "../../clientTypes";
import gql from "graphql-tag";

export interface MeQuerydata {
    me: Query["me"];
}

export const ME_PROFILE = gql`
    query {
        me {
            name
            surname
            email
            address
            phone
        }
    }
`;
