import React, {CSSProperties} from "react";
import AppColors from "../../Styles/AppColors";
import Bars from "../../Assets/bars-solid.svg"
import "../../Styles/animation.css"

interface NavBarProps {
    disableSidebar: () => void
    sidebarDisabled: boolean
}

class NavBar extends React.Component<NavBarProps> {

    constructor(props:any) {
        super(props);
    }

    handleDisconnect() {
        window.localStorage.clear();
        window.location.href = "/login";
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={containerStyle}>
                <div style={itemSeparator}>
                    <div style={{maxWidth: "55px"}}>
                        <img style={{width: "75%", margin: "5px"}} className={this.props.sidebarDisabled ? "rotate-90-ccw" : "rotate-90-cw"} onClick={this.props.disableSidebar} src={Bars}/>
                    </div>
                    <div>
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
