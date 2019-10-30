import React, {Component, CSSProperties} from "react";
import WorldTimeWidget from "../Components/Widget/worldtimeapi.org/WorldTimeWidget";

class HomePage extends Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={dashboardContainer}>
                <WorldTimeWidget/>
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
    borderRadius: "5px",
    flexDirection: "column",
    overflow: "visible"
};

export const defaultWidgetContentStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    marginBottom: "10px"
};

export const defaultWidgetHeaderStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
};

export const defaultWidgetCornerStyle: CSSProperties = {
    alignSelf: "flex-end",
    marginTop: "3px",
    marginRight: "3px",
    width: "20px"
};

export default HomePage;
