import React, {CSSProperties} from "react";
import AppColors from "../../Styles/AppColors";
import Bars from "../../Assets/bars-solid.svg"
import "../../Styles/animation.css"
import {GraphqlClient} from "../../App";
import Plus from "../../Assets/plus-solid.svg";
import SignOut from "../../Assets/sign-out-alt-solid.svg"
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
import "../../Styles/subclass.css"
import WidgetListMenu from "../Menu/widgetListMenu";

interface NavBarProps {
    disableSidebar: () => void
    sidebarDisabled: boolean
    switchWidgetMenu: (val: boolean) => void
    widgetMenuOpened: boolean
}

class NavBar extends React.Component<NavBarProps> {

    constructor(props:any) {
        super(props);
        this.addCustomWidget = this.addCustomWidget.bind(this);
        this.handleAddWidget = this.handleAddWidget.bind(this);
    }

    handleDisconnect() {
        window.localStorage.clear();
        window.location.href = "/login";
    }

    handleAddWidget() {
        this.props.switchWidgetMenu(!this.props.widgetMenuOpened);
    }

    addCustomWidget() {
        let tmp:WidgetCreateInput = {settings: '{"timezone": "Asia/Gaza"}', title: "Test unnamed", type: WidgetType.WorldTime, order: 2};
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
                    <div style={{display : 'flex', justifyContent: 'center', alignItems : 'center', height : '100%' }}>
                        {this.props.widgetMenuOpened ?
                            <div className="widget-menu" style={{...addWidgetMenuStyle, ...addWidgetMenuStyleDisabled, height: "200px"}}>
                                {this.props.widgetMenuOpened && <WidgetListMenu/>}
                            </div> :
                            <div className="widget-menu" style={{...addWidgetMenuStyle, height: 0}}>
                                {this.props.widgetMenuOpened && <WidgetListMenu/>}
                            </div>
                        }
                        <div className="styled-button" role="button" style={navbarIconStyle} onClick={this.handleAddWidget}>
                            <div style={{...addWidgetMenuTriangleStyle, fontSize: this.props.widgetMenuOpened ? "24px" : "0"}}>▲</div>
                            Add
                        </div>
                        <div className="styled-button" role="button" style={navbarIconStyle} onClick={this.handleDisconnect}>Disconnect</div>
                    </div>
                </div>
            </div>
        )
    }
}

const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: AppColors.primaryColor,
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

const navbarIconStyle: CSSProperties = {
    backgroundColor: 'rgba(0,0,0,0)',
    height : '100%',
    display : 'flex',
    justifyContent: 'center',
    alignItems : 'center',
    color : 'white',
    fontWeight : 'bold',
    borderLeft : 'solid',
    padding : 20
};

const addWidgetMenuTriangleStyle: CSSProperties = {
    position: "absolute",
    top: "50px",
    zIndex: 2147483647,
    color: "white",
    fontSize: "24px",
    transition: "all .5s"
};

const addWidgetMenuStyle: CSSProperties = {
    position: "absolute",
    top: "74px",
    zIndex: 12345,
    height: "200px",
    width: "25vmax",
    right: "20px",
    borderRadius: "10px",
    transition: "all .5s",
    backgroundColor: "white",
    overflow: "hidden"
};

const addWidgetMenuStyleDisabled: CSSProperties = {
    "WebkitBoxShadow":"0px 0px 20px 2px rgba(38,38,38,1)",
    "MozBoxShadow":"0px 0px 20px 2px rgba(38,38,38,1)",
    "boxShadow":"0px 0px 20px 2px rgba(38,38,38,1)"
};

export default NavBar;
