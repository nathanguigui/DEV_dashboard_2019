import React, {CSSProperties} from "react";
import AppColors from "../../Styles/AppColors";
import {PrivateRoute} from "../Auth/privateRoute";
import HomePage from "../../Pages/homePage";
import {GraphqlClient} from "../../App";
import {ME_PROFILE, MeQuerydata} from "../../Graphql/User/Query/Me";
import { ApolloQueryResult } from "apollo-client";
import LoadingFc from "../miniComponent/loading";

interface SideBarProps {
    sidebarDisabled: boolean
    switchWidgetMenu: (val:boolean) => void
    widgetMenuOpened: boolean
}

interface SideBarState {
    loading: boolean
    data: MeQuerydata|null
}

class SideBar extends React.Component<SideBarProps, SideBarState> {

    constructor(props:SideBarProps) {
        super(props);
        this.state = {
            loading: true,
            data: null
        };
        this.updateContent = this.updateContent.bind(this);
    }

    updateContent(): void {
        GraphqlClient.query<MeQuerydata>({query: ME_PROFILE}).then((res:ApolloQueryResult<MeQuerydata>) => {
            this.setState({loading: false, data: res.data})
        })
    }

    componentDidMount(): void {
        this.updateContent();
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div onClick={() => {this.props.switchWidgetMenu(false)}} style={containerStyle} className="containAllContent">
                <div style={!this.props.sidebarDisabled ? sidebarStyle : {...sidebarStyle, width: "0%"}} className="sidebar">
                    {!this.props.sidebarDisabled ?
                        this.state.loading ?
                            LoadingFc():
                            <p style={sidebarContentStyle}>{this.state.data && this.state.data.me && this.state.data.me.name}</p>:<span/>

                    }
                </div>
                <div style={!this.props.sidebarDisabled ? {...contentStyle, paddingLeft: "30px", paddingRight: "10px", paddingTop : 15} : {...contentStyle, width: "100%", padding : 15}} className="content">
                    <PrivateRoute path="/" exact component={HomePage}/>
                </div>
            </div>
        )
    }
}

const containerStyle : CSSProperties = {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    position: "fixed",
    width: "100%",
};

const sidebarStyle : CSSProperties = {
    backgroundColor: AppColors.textAndIcons,
    transition: "all .25s linear",
    width: "300px"
};

const sidebarContentStyle : CSSProperties = {
    width: "100%",
    transition: "all .25s linear"
}

const contentStyle : CSSProperties = {
    flexGrow: 10,
    backgroundColor: AppColors.dividerColor,
    transition: "all ease-in-out 0.25s"
};

export default SideBar;
