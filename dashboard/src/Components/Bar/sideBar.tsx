import React, {CSSProperties, ReactNode} from "react";
import AppColors from "../../Styles/AppColors";
import {PrivateRoute} from "../Auth/privateRoute";
import HomePage from "../../Pages/homePage";
import {GraphqlClient} from "../../App";
import {ME_PROFILE, MeQuerydata} from "../../Graphql/User/Query/Me";
import {ApolloQueryResult} from "apollo-client";
import LoadingFc from "../miniComponent/loading";
import Popup from "../miniComponent/popup";
import {googleScopes, googleUrlBuilder} from "../OAuth2/Google/utils";

interface SideBarProps {
    sidebarDisabled: boolean
    switchWidgetMenu: (val:boolean) => void
    widgetMenuOpened: boolean
}

interface SideBarState {
    loading: boolean
    popupOpened: boolean
    popupContent: ReactNode
    data: MeQuerydata|null
}


const responseGoogle = (response:any) => {
  console.log(response);
}

class SideBar extends React.Component<SideBarProps, SideBarState> {

    private oauth2IframeRef:any;

    constructor(props:SideBarProps) {
        super(props);
        this.state = {
            loading: true,
            data: null,
            popupOpened: false,
            popupContent: <p>loading</p>
        };
        this.updateContent = this.updateContent.bind(this);
        this.setPopup = this.setPopup.bind(this);
        this.openPopup = this.openPopup.bind(this);
        this.openIntraPopup = this.openIntraPopup.bind(this);
        this.handleIframeLoad = this.handleIframeLoad.bind(this);
        this.oauth2IframeRef = React.createRef()
    }

    updateContent(): void {
        GraphqlClient.query<MeQuerydata>({query: ME_PROFILE}).then((res:ApolloQueryResult<MeQuerydata>) => {
            this.setState({loading: false, data: res.data})
        })
    }

    setPopup(val: boolean) {
        this.setState({popupOpened: val});
    }

    openPopup(val: boolean, content: ReactNode) {
        this.setState({popupOpened: val, popupContent: content});
    }

    componentDidMount(): void {
        this.updateContent();
    }

    handleIframeLoad(e: any): void {
        let iframe = document.getElementById("oauth2-frame");
        if (e.target.src !== "https://intra.epitech.eu/admin/autolog?format=json") {
            let headers = new Headers({'Access-Control-Allow-Origin': '*'});
            // @ts-ignore
            fetch("https://intra.epitech.eu/admin/autolog?format=json", headers).then((res) => {
                console.log(res)
            })
        }
        // @ts-ignore
        console.log(e.target.src)
    }

    openIntraPopup(): void {
        let src = googleUrlBuilder({scope: googleScopes.GMAIL_LABELS});
        window.location.href = src;
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div onClick={() => {this.props.switchWidgetMenu(false)}} style={containerStyle} className="containAllContent">
                <div style={!this.props.sidebarDisabled ? sidebarStyle : {...sidebarStyle, width: "0%"}} className="sidebar">
                    {this.state.popupOpened && <Popup content={this.state.popupContent} closePopup={() => {this.setPopup(false)}} />}
                    {!this.props.sidebarDisabled ?
                        this.state.loading ?
                            LoadingFc():
                            <div>
                                <div style={sidebarContentStyle}>{this.state.data && this.state.data.me && this.state.data.me.name}</div>
                                {this.state.data && this.state.data.me && this.state.data.me.googleToken ?
                                    <div style={sidebarContentStyle}>{this.state.data.me.googleToken}</div> :
                                    <div onClick={this.openIntraPopup}>connect with google</div>
                                }
                            </div>
                        :<span/>
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
    transition: "all ease-in-out 0.25s",
    overflowY: "scroll"
};

export default SideBar;
