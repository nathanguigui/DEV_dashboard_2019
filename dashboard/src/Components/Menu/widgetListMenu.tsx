import React, {CSSProperties} from "react";
import "../../Styles/subclass.css"
import {WidgetType} from "../../Graphql/clientTypes";
import WorldTimeWidget from "../Widget/worldtimeapi.org/WorldTimeWidget";

interface WidgetListMenuProps {
    switchMenu: (val: boolean) => void
    openPopup: (content: React.ReactNode) => void
    closePopup: () => void
}

class WidgetListMenu extends React.Component<WidgetListMenuProps> {

    handleAddCustomWidget(widgetType: WidgetType) {
        switch (widgetType) {
            case WidgetType.WorldTime:
                this.props.openPopup(WorldTimeWidget.getInitSettings());
                this.props.switchMenu(false);
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={WidgetListMenuContainerStyle}>
                <div onClick={() => {this.handleAddCustomWidget(WidgetType.WorldTime)}} className="new-widget-button" style={WidgetButtonStyle}>
                    <i className="fa-4x far fa-clock"/>
                    addWorldtime
                </div>
            </div>
        )
    }
}

const WidgetListMenuContainerStyle: CSSProperties = {
    display: "flex",
    margin: "10px",
    flexDirection: "row"
};

const WidgetButtonStyle: CSSProperties = {
    color: "grey",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    border: "solid 2px",
    borderRadius: "10px"
};

export default WidgetListMenu;
