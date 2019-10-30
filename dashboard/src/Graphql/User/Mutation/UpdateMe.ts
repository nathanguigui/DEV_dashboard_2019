import {Mutation} from "../../clientTypes";
import gql from "graphql-tag";

export interface UpdateMeMutationData {
    updateMe: Mutation["updateMe"];
}

export const UPDATE_ME = gql`
    mutation updateMe($data: UpdateMeInput!) {
        updateMe(data: $data) {
            id,
            email,
            name,
            surname,
            address,
            phone,
            type,
            refreshTime,
            backgroundImage,
            sidebarDisabled,
            googleToken,
            intraToken,
            spotifyToken,
            timezone
        }
    }
`;
