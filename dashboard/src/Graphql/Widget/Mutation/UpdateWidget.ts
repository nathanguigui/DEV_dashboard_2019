import {Mutation} from "../../clientTypes";
import gql from "graphql-tag";

export interface UpdateWidgetMutationData {
    updateMe: Mutation["updateWidget"];
};

export const UPDATE_WIDGET_MUTATION = gql`
    mutation($data: WidgetUpdateInput!, $where: WidgetWhereUniqueInput!) {
        updateWidget(where: $where, data: $data) {
            id
            type
            settings
            title
            order
        }
    }
`;
