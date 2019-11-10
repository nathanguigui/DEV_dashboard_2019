import React, {Component, CSSProperties, ReactNode} from "react";
import WorldTimeWidget from "../Components/Widget/worldtimeapi.org/WorldTimeWidget";
import LoadingFc from "../Components/miniComponent/loading";
import {GraphqlClient} from "../App";
import {ME_PROFILE, MeQuerydata} from "../Graphql/User/Query/Me";
import {Widget, WidgetType, WidgetUpdateInput} from "../Graphql/clientTypes";
import {UPDATE_ME} from "../Graphql/User/Mutation/UpdateMe";
import {UPDATE_WIDGET_MUTATION} from "../Graphql/Widget/Mutation/UpdateWidget";
import AppColors from "../Styles/AppColors";
import PornHubWidget from "../Components/Widget/pornhub.com/PornHubWidget";
import CryptocompareWidget from "../Components/Widget/Cryptocompare.com/CrytptocompareWidget";
import NumberApiWidget from "../Components/Widget/numbersapi.com/NumberApiWidget";
import IcnbWidget from "../Components/Widget/ICNB.com/ICDNBWidget";
import RatesApiWidget from "../Components/Widget/RatesApi.org/RatesApiWidget";
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
        };
        this.handleMoveLeftWidget = this.handleMoveLeftWidget.bind(this);
        this.handleMoveRightWidget = this.handleMoveRightWidget.bind(this);
        this.handleRemoveWidget = this.handleRemoveWidget.bind(this);
        this.removeProfileWidget = this.removeProfileWidget.bind(this);
    }

    removeProfileWidget(widget: Widget, newWidget: any): void {
        GraphqlClient.mutate({mutation: UPDATE_ME, variables: {data: {
            widgets: {disconnect: {id: widget.id}}
        }}}).then((res) => {
            if (this.state.data && this.state.data.me && this.state.data.me.widgets) {
                let tmp = this.state.data;
                // @ts-ignore
                tmp.me.widgets = newWidget;
                this.setState({data: tmp})
            }
        })
    }

    handleRemoveWidget(widget: Widget): void {
        if (this.state.data && this.state.data.me && this.state.data.me.widgets) {
            let newWidget:Array<Widget> = [];
            this.state.data.me.widgets.forEach((wdg: Widget) => {
                widget.id !== wdg.id && newWidget.push(wdg)
            });
            this.removeProfileWidget(widget, newWidget);
        }
    }

    async handleMoveLeftWidget(widget: Widget) : Promise<boolean> {
        let oldState = this.state;
        if (oldState.data && oldState.data.me && oldState.data.me.widgets) {
            let leftWidget: Widget | undefined = undefined;
            for (let i = 0; i < oldState.data.me.widgets.length; i++) {
                if (oldState.data.me.widgets[i].order === widget.order - 1) {
                    leftWidget = oldState.data.me.widgets[i];
                    break;
                }
            }

            console.log(leftWidget);
            if (typeof leftWidget === typeof widget) {
                // @ts-ignore
                const newSelectedWidgetData: WidgetUpdateInput = {order: leftWidget.order};
                const newLeftWidgetData: WidgetUpdateInput = {order: widget.order};
                const data = await GraphqlClient.mutate({mutation: UPDATE_WIDGET_MUTATION, variables: {data: newSelectedWidgetData, where: {id: widget.id}}});
                if (data.errors)
                    return false;
                // @ts-ignore
                await GraphqlClient.mutate({mutation: UPDATE_WIDGET_MUTATION, variables: {data: newLeftWidgetData, where: {id: leftWidget.id}}});
                // TODO update state instead of reload
                window.location.reload();
                return true
            }
            return false
        }
        return false
    }

    async handleMoveRightWidget(widget: Widget): Promise<boolean> {
        let oldState = this.state;
        if (oldState.data && oldState.data.me && oldState.data.me.widgets) {
            let rightWidget: Widget | undefined = undefined;
            for (let i = 0; i < oldState.data.me.widgets.length; i++) {
                if (oldState.data.me.widgets[i].order === widget.order + 1) {
                    rightWidget = oldState.data.me.widgets[i];
                    break;
                }
            }

            console.log(rightWidget);
            if (typeof rightWidget === typeof widget) {
                // @ts-ignore
                const newSelectedWidgetData: WidgetUpdateInput = {order: rightWidget.order};
                const newRightWidgetData: WidgetUpdateInput = {order: widget.order};
                const data = await GraphqlClient.mutate({mutation: UPDATE_WIDGET_MUTATION, variables: {data: newSelectedWidgetData, where: {id: widget.id}}});
                if (data.errors)
                    return false;
                // @ts-ignore
                await GraphqlClient.mutate({mutation: UPDATE_WIDGET_MUTATION, variables: {data: newRightWidgetData, where: {id: rightWidget.id}}});
                // TODO update state instead of reload
                window.location.reload();
                return true
            }
            return false
        }
        return false
    }

    componentDidMount(): void {
        GraphqlClient.query<MeQuerydata>({query: ME_PROFILE}).then((res) => {
            this.setState({data: res.data, loading: false})
        })
    }

    getWidget(widget: Widget): ReactNode {
        switch (widget.type) {
            case WidgetType.WorldTime:
                return <WorldTimeWidget widget={widget} moveLeft={this.handleMoveLeftWidget} moveRight={this.handleMoveRightWidget} remove={this.handleRemoveWidget}/>
            case WidgetType.Pornhub:
                return <PornHubWidget widget={widget} moveLeft={this.handleMoveLeftWidget} moveRight={this.handleMoveRightWidget} remove={this.handleRemoveWidget}/>
            case WidgetType.Icdnb:
                return <IcnbWidget widget={widget} moveLeft={this.handleMoveLeftWidget} moveRight={this.handleMoveRightWidget} remove={this.handleRemoveWidget}/>
             case WidgetType.RatesApi:
                 return <RatesApiWidget widget={widget} moveLeft={this.handleMoveLeftWidget} moveRight={this.handleMoveRightWidget} remove={this.handleRemoveWidget}/>


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
    backgroundColor: AppColors.textAndIcons,
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
    marginTop: "3px",
    marginRight: "3px",
    width: "20px"
};

export const defaultWidgetNavbarStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    height: "40px",
};

export const defaultWidgetNavbarButtonsStyle: CSSProperties = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
};

export const defaultWidgetNavbarSingleButton: CSSProperties = {
    backgroundColor: 'rgba(0,0,0,0)',
    height : '100%',
    display : 'flex',
    justifyContent: 'center',
    alignItems : 'center',
    color : AppColors.lightPrimaryColor,
    fontWeight : 'bold',
    borderLeft : 'solid',
    minWidth: "25px",
    borderBottom: 'solid',
};

export default HomePage;
