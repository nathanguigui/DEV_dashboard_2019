import React, {CSSProperties} from "react";
import AppColors from "../../Styles/AppColors";
import Bars from "../../Assets/bars-solid.svg"
import "../../Styles/animation.css"
import {GraphqlClient} from "../../App";
import {
    MutationCreateWidgetArgs, MutationUpdateMeArgs,
    UpdateMeInput,
    User,
    Widget,
    WidgetCreateInput,
    WidgetType
} from "../../Graphql/clientTypes";
import {ADD_WIDGET_MUTATION} from "../../Graphql/Widget/Mutation/AddWidget";
import {UPDATE_ME} from "../../Graphql/User/Mutation/UpdateMe";

interface NavBarProps {
    disableSidebar: () => void
    sidebarDisabled: boolean
}

class NavBar extends React.Component<NavBarProps> {

    constructor(props:any) {
        super(props);
        this.handleAddWidget = this.handleAddWidget.bind(this);
    }

    handleDisconnect() {
        window.localStorage.clear();
        window.location.href = "/login";
    }

    handleAddWidget() {
        let tmp:WidgetCreateInput = {settings: '{"timezone": "Asia/Gaza"}', title: "Test unnamed", type: WidgetType.WorldTime};
        GraphqlClient.mutate({
            mutation: ADD_WIDGET_MUTATION,
            variables: {data: tmp}
        }).then((res) => {
            GraphqlClient.mutate<User, MutationUpdateMeArgs>({mutation: UPDATE_ME, variables: {
                data: {
                    widgets: {
                        connect: [
                            {id: res.data.createWidget.id}
                        ]
                    }
                }
            }}).then((res) => {
                window.location.reload()
            })
        })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={containerStyle}>
                <div style={itemSeparator}>
                    <div style={{maxWidth: "55px"}}>
                        <img style={{width: "75%", margin: "5px"}} className={this.props.sidebarDisabled ? "rotate-90-ccw" : "rotate-90-cw"} onClick={this.props.disableSidebar} src={Bars}/>
                    </div>
                    <div>
                        <button className="matter-button-contained" onClick={this.handleAddWidget}>Add</button>
                        <button className="matter-button-contained" onClick={this.handleDisconnect}>Disconnection</button>
                    </div>
                </div>
            </div>
        )
    }
}

const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: AppColors.darkPrimaryColor,
    color: AppColors.textAndIcons
};

const itemSeparator: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5px",
    marginRight: "5px"
};

export default NavBar;
