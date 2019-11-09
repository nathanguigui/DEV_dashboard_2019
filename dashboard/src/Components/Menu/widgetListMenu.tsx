import React, {CSSProperties} from "react";
import "../../Styles/subclass.css"
import {WidgetType} from "../../Graphql/clientTypes";
import WorldTimeWidget from "../Widget/worldtimeapi.org/WorldTimeWidget";
import PornHubWidget from "../Widget/pornhub.com/PornHubWidget";
import NumberApiWidget from "../Widget/numbersapi.com/NumberApiWidget";
import IcnbWidget from "../Widget/ICNB.com/ICDNBWidget";
import CryptocompareWidget from "../Widget/Cryptocompare.com/CrytptocompareWidget";

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
                break;
            case WidgetType.Pornhub:
                this.props.openPopup(PornHubWidget.getInitSettings());
                this.props.switchMenu(false);
                break;
            case WidgetType.NumbersApi:
                this.props.openPopup(NumberApiWidget.getInitSettings());
                this.props.switchMenu(false);
                break;
            case WidgetType.Icdnb:
                this.props.openPopup(IcnbWidget.getInitSettings());
                this.props.switchMenu(false);
                break;
            case WidgetType.Cryptocompare:
                this.props.openPopup(IcnbWidget.getInitSettings());
                this.props.switchMenu(false);
                break;
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={WidgetListMenuContainerStyle}>
                <div onClick={() => {this.handleAddCustomWidget(WidgetType.WorldTime)}} className="new-widget-button" style={WidgetButtonStyle}>
                    <i className="fa-4x far fa-clock"/>
                    World Time
                </div>
                <div onClick={() => {this.handleAddCustomWidget(WidgetType.Pornhub)}} className="new-widget-button" style={WidgetButtonStyle}>
                    <i className="fa-4x far fa-clock"/>
                    PornHub
                </div>
                <div onClick={() => {this.handleAddCustomWidget(WidgetType.NumbersApi)}} className="new-widget-button" style={WidgetButtonStyle}>
                    <i className="fa-4x far fa-clock"/>
                    Number Fact
                </div>
                <div onClick={() => {this.handleAddCustomWidget(WidgetType.Icdnb)}} className="new-widget-button" style={WidgetButtonStyle}>
                    <i className="fa-4x far fa-clock"/>
                    Jokes
                </div>
                <div onClick={() => {this.handleAddCustomWidget(WidgetType.Cryptocompare)}} className="new-widget-button" style={WidgetButtonStyle}>
                    <i className="fa-4x far fa-clock"/>
                    Cryptocompare
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
    borderRadius: "10px",
    width: "20%"
};

export default WidgetListMenu;
