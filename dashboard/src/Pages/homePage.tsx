import React, {Component, CSSProperties, ReactNode} from "react";
import WorldTimeWidget from "../Components/Widget/worldtimeapi.org/WorldTimeWidget";
import LoadingFc from "../Components/miniComponent/loading";
import {GraphqlClient} from "../App";
import {ME_PROFILE, MeQuerydata} from "../Graphql/User/Query/Me";
import {Widget, WidgetType} from "../Graphql/clientTypes";

interface HomePageState {
    loading: boolean
    data: MeQuerydata | null
}

class HomePage extends Component<Object, HomePageState> {

    constructor(props:Object) {
        super(props);
        this.state = {
            loading: true,
            data: null
        }
    }

    componentDidMount(): void {
        GraphqlClient.query<MeQuerydata>({query: ME_PROFILE}).then((res) => {
            this.setState({data: res.data, loading: false})
        })
    }

    getWidget(widget: Widget): ReactNode {
        switch (widget.type) {
            case WidgetType.WorldTime:
                return <WorldTimeWidget widget={widget}/>
        }
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        if (this.state.loading)
            return LoadingFc();
        return (
            <div style={dashboardContainer}>
                {
                    this.state.data && this.state.data.me && this.state.data.me.widgets && this.state.data.me.widgets.
                    map((widget) => this.getWidget(widget))
                }
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
