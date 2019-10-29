import React, {Component, CSSProperties} from "react";
import WorldTimeWidget from "../Components/Widget/worldtimeapi.org/WorldTimeWidget";

class HomePage extends Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={dashboardContainer}>
                <WorldTimeWidget/>
                <div style={defaultWidgetStyle}>
                    <p>this is homepage</p>
                </div>
                <div style={defaultWidgetStyle}>
                    <p>this is homepage</p>
                </div>
                <div style={defaultWidgetStyle}>
                    <p>this is homepage</p>
                </div>
            </div>
        )
    }
}

const dashboardContainer: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
};

export const defaultWidgetStyle: CSSProperties = {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "grey",
    margin: "5px",
    borderRadius: "5px"
};

export default HomePage;
