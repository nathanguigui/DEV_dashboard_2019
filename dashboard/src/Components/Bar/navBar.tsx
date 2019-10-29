import React, {CSSProperties} from "react";
import AppColors from "../../AppColors";

interface NavBarProps {
    disableSidebar: () => void
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
                    <div>
                        <p onClick={this.props.disableSidebar}>toto</p>
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
