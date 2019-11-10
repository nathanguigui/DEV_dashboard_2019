import React, {ReactNode} from "react";
import {Ph_Categories, Ph_Response, Ph_UrlParams, Ph_Video, PornHubWidgetSettings, WidgetProps} from "../widgetTypes";
import DefaultWidget from "../DefaultWidget";
import AddPornHubWidget from "./addPornHubWidget";
import {pornHubUrlBuilder} from "./utils/urlBuilder";
import LoadingFc from "../../miniComponent/loading";
import PornHubVideoPreview from "./PornHubVideoPreview";

interface PornHubWidgetState {
    loading: boolean
    settings: PornHubWidgetSettings
    query: string
    data: Ph_Response | undefined
    currentVideoIdx: number
}

class PornHubWidget extends React.Component<WidgetProps, PornHubWidgetState> {
    constructor(props:WidgetProps) {
        super(props);
        let settings: PornHubWidgetSettings = JSON.parse(props.widget.settings);
        this.state = {
            loading: false,
            query: "",
            settings,
            data: undefined,
            currentVideoIdx: 0
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
        let urlVars: Ph_UrlParams = {category: Ph_Categories.PH_HARDCORE};
        const fetchUrl = pornHubUrlBuilder(urlVars);
        fetch(fetchUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "origin": "https://pastek.space"
            }
        }).then((promise) => {
            promise.json().then((res: Ph_Response) => {
                this.setState({data: res, loading: false})
            })
        })
    }

    triggerCornerClick() {

    }

    getContent(): React.ReactNode {
        return (!this.state.loading && this.state.data ?
                <div>
                    {this.state.currentVideoIdx !== 0 &&
                    <div onClick={() => this.setState({currentVideoIdx: this.state.currentVideoIdx - 1})}>Prev</div>
                    }
                    <PornHubVideoPreview video={this.state.data.videos[this.state.currentVideoIdx]} />
                    {this.state.currentVideoIdx < this.state.data.videos.length &&
                    <div onClick={() => this.setState({currentVideoIdx: this.state.currentVideoIdx + 1})}>Next</div>
                    }
                </div> :
                LoadingFc()
        )
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
