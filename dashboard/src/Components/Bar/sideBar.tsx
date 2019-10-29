import React, {CSSProperties} from "react";
import AppColors from "../../AppColors";
import {PrivateRoute} from "../Auth/privateRoute";
import HomePage from "../../Pages/homePage";

class SideBar extends React.Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div style={containerStyle} className="containAllContent">
                <div style={sidebarStyle} className="sidebar">
                    Sidebar
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
    flexDirection: "row"
};

const sidebarStyle : CSSProperties = {
    flexGrow: 1,
    backgroundColor: AppColors.lightPrimaryColor
};

const contentStyle : CSSProperties = {
    flexGrow: 10
};

export default SideBar;
