import React, {CSSProperties} from "react";
import "../../Styles/subclass.css"
import {WidgetType} from "../../Graphql/clientTypes";
import WorldTimeWidget from "../Widget/worldtimeapi.org/WorldTimeWidget";
import PornHubWidget from "../Widget/pornhub.com/PornHubWidget";
import IcnbWidget from "../Widget/ICNB.com/ICDNBWidget";
import RatesApiWidget from "../Widget/RatesApi.org/RatesApiWidget";
import WeatherWidget from "../Widget/OpenWeatherApi/OpenWeatherApi";

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
            case WidgetType.Icdnb:
                this.props.openPopup(IcnbWidget.getInitSettings());
                this.props.switchMenu(false);
                break;
            case WidgetType.RatesApi:
                this.props.openPopup(RatesApiWidget.getInitSettings());
                this.props.switchMenu(false);
                break;
            case WidgetType.Openweathermap:
                this.props.openPopup(WeatherWidget.getInitSettings());
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
                    <i className="fa-4x far fa-warning"/>
                    PornHub
                </div>
                <div onClick={() => {this.handleAddCustomWidget(WidgetType.Icdnb)}} className="new-widget-button" style={WidgetButtonStyle}>
                    <i className="fa-4x far fa-file-movie-o"/>
                    Jokes
                </div>
                <div onClick={() => {this.handleAddCustomWidget(WidgetType.RatesApi)}} className="new-widget-button" style={WidgetButtonStyle}>
                    <i className="fa-4x far fa-euro"/>
                    Euro Converter
                </div>
                <div onClick={() => {this.handleAddCustomWidget(WidgetType.Openweathermap)}} className="new-widget-button" style={WidgetButtonStyle}>
                    <i className="fa-4x far fa-cloud"/>
                    Weather
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
