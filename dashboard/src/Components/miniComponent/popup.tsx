import React, {CSSProperties} from "react";
import {defaultWidgetNavbarSingleButton} from "../../Pages/homePage";

interface PopupProps {
    content: React.ReactNode;
    closePopup: () => void
}

class Popup extends React.Component<PopupProps> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={popupStyle} className="popup">
                <div style={popupContainerStyle}>
                    <div className="styled-button" role="button" onClick={this.props.closePopup} style={defaultWidgetNavbarSingleButton}>
                        <i title="move right" style={IconStyle} className="fas styled-icons fa-times"/>
                    </div>
                    <div style={{margin: "20px"}}>
                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
}

const popupContainerStyle: CSSProperties = {
    "display":"flex",
    "flexDirection":"column",
    "justifyContent":"center",
    "width":"100%",
    "alignItems":"flex-end"
}

const popupStyle: CSSProperties = {
    "position":"absolute",
    "top":"50%",
    "left":"50%",
    "transform":"translate(-50%, -50%)",
    zIndex: 12345678,
    backgroundColor: "white",
    color: "grey",
    boxShadow : "0 0 8px 0 rgba(0, 0, 0 ,0.30)",
    borderRadius: "10px"
};

const IconStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export default Popup;
