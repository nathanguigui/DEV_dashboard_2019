import React, {CSSProperties} from "react";
import AppColors from "../../AppColors";
import {PrivateRoute} from "../Auth/privateRoute";
import HomePage from "../../Pages/homePage";

interface SideBarProps {
    sidebarDisabled: boolean
}

class SideBar extends React.Component<SideBarProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div style={containerStyle} className="containAllContent">
                <div style={!this.props.sidebarDisabled ? sidebarStyle : {...sidebarStyle, flexGrow: 0}} className="sidebar">
                    <p style={!this.props.sidebarDisabled ? sidebarContentStyle : {...sidebarContentStyle, display: "none"}}>toto</p>
                </div>
                <div style={contentStyle} className="content">
                    <PrivateRoute path="/" exact component={HomePage}/>
                    <PrivateRoute path="/toto" exact component={HomePage}/>
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
    flexGrow: 2,
    backgroundColor: AppColors.lightPrimaryColor,
    transition: "all .25s linear"
};

const sidebarContentStyle : CSSProperties = {
    width: "100%",
    transition: "all .25s linear"
}

const contentStyle : CSSProperties = {
    flexGrow: 10
};

export default SideBar;
