import React, {ReactNode} from "react";
import {PornHubWidgetSettings, WidgetProps} from "../widgetTypes";
import DefaultWidget from "../DefaultWidget";
import AddPornHubWidget from "./addPornHubWidget";

interface PornHubWidgetState {
    loading: boolean
    settings: PornHubWidgetSettings
    query: string
}

class PornHubWidget extends React.Component<WidgetProps, PornHubWidgetState> {
    constructor(props:WidgetProps) {
        super(props);
        let settings: PornHubWidgetSettings = JSON.parse(props.widget.settings);
        this.state = {
            loading: false,
            query: "",
            settings
        };
        this.updateMe = this.updateMe.bind(this);
        this.triggerCornerClick = this.triggerCornerClick.bind(this);
        this.getContent = this.getContent.bind(this)
    }

    static getInitSettings(): ReactNode {
        return <AddPornHubWidget/>
    }

    componentDidMount(): void {
        this.updateMe();
    }

    updateMe() {
    }

    triggerCornerClick() {

    }

    getContent(): React.ReactNode {
        return (<p>
            toto
        </p>)
    }

    getSettings(): React.ReactNode {
        return (<p>
            toto
        </p>)
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <DefaultWidget updateContentFc={this.updateMe} content={this.getContent()} settings={this.getSettings()}
                           widget={this.props.widget} refreshRateSec={300} triggerCornerClick={this.triggerCornerClick}
                           moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} remove={this.props.remove}
            />
        )
    }

}

export default PornHubWidget;
