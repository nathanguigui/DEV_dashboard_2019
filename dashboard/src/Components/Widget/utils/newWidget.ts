import {Widget, WidgetCreateInput} from "../../../Graphql/clientTypes";
import {GraphqlClient} from "../../../App";
import {ADD_WIDGET_MUTATION} from "../../../Graphql/Widget/Mutation/AddWidget";
import {ME_PROFILE, MeQuerydata} from "../../../Graphql/User/Query/Me";
import {UPDATE_ME} from "../../../Graphql/User/Mutation/UpdateMe";

export const AUTO_WIDGET_ORDER = -1;

export async function newWidget(props: WidgetCreateInput): Promise<Widget> {
    let resp = await GraphqlClient.mutate({
        mutation: ADD_WIDGET_MUTATION,
        variables: {data: props}
    });
    return resp.data.createWidget
}

export async function addMeWidget(props: WidgetCreateInput): Promise<boolean> {
    let meInfoResp = await GraphqlClient.query<MeQuerydata>({query: ME_PROFILE});
    if (meInfoResp.data.me && meInfoResp.data.me.widgets) {
        props.order = meInfoResp.data.me.widgets.length + 1;
        let widget = await newWidget(props);
        await GraphqlClient.mutate({mutation: UPDATE_ME, variables: {
            data: {widgets: {
                connect: [{id: widget.id}]
            }}
        }});
        return true
    }
    return false
}
