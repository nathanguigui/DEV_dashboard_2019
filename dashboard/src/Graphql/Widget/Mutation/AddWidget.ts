import {Mutation} from "../../clientTypes";
import gql from "graphql-tag";

export interface AddWidgetMutationData {
    updateMe: Mutation["createWidget"];
};

export const ADD_WIDGET_MUTATION = gql`
    mutation($data: WidgetCreateInput!) {
        createWidget(data: $data) {
            id
            type
            title
            settings
        }
    }
`;
