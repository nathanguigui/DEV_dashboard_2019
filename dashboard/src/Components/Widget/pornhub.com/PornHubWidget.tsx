import React, {ReactNode} from "react";
import {Ph_Categories, Ph_Response, Ph_UrlParams, PornHubWidgetSettings, WidgetProps} from "../widgetTypes";
import DefaultWidget from "../DefaultWidget";
import AddPornHubWidget from "./addPornHubWidget";
import {pornHubUrlBuilder} from "./utils/urlBuilder";
import LoadingFc from "../../miniComponent/loading";
import PornHubVideoPreview from "./PornHubVideoPreview";
import {MutationUpdateWidgetArgs, WidgetUpdateInput} from "../../../Graphql/clientTypes";
import {GraphqlClient} from "../../../App";
import {UPDATE_WIDGET_MUTATION, UpdateWidgetMutationData} from "../../../Graphql/Widget/Mutation/UpdateWidget";

interface PornHubWidgetState {
    loading: boolean
    settings: PornHubWidgetSettings
    newSettings: PornHubWidgetSettings
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
            currentVideoIdx: 0,
            newSettings: settings
        };
        this.updateMe = this.updateMe.bind(this);
        this.triggerCornerClick = this.triggerCornerClick.bind(this);
        this.getContent = this.getContent.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
        this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this)
    }

    static getInitSettings(): ReactNode {
        return <AddPornHubWidget/>
    }

    componentDidMount(): void {
        this.updateMe();
    }

    updateMe() {
        let urlVars: Ph_UrlParams = {category: this.state.settings.category, search: this.state.query};
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

    handleSettingsChange(e: any) {
        let tmp = this.state.newSettings;
        e.target.name === "query" && (tmp.query = e.target.value);
        e.target.name === "category" && (tmp.category = e.target.value);
        console.log(e.target.value);
        this.setState({newSettings: tmp});
        this.updateMe();
    }

    getContent(): React.ReactNode {
        return (!this.state.loading && this.state.data ?
                <div>
                    <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                        <div>Selected category: {this.state.settings.category}</div>
                        <div>Query: {this.state.settings.query}</div>
                    </div>
                    <PornHubVideoPreview video={this.state.data.videos[this.state.currentVideoIdx]} />
                    <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                        {this.state.currentVideoIdx !== 0 &&
                        <div style={{cursor: "pointer"}} onClick={() => this.setState({currentVideoIdx: this.state.currentVideoIdx - 1})}><i className="fas fa-hand-point-left"/></div>
                        }
                        {this.state.currentVideoIdx < this.state.data.videos.length &&
                        <div style={{cursor: "pointer"}} onClick={() => this.setState({currentVideoIdx: this.state.currentVideoIdx + 1})}><i className="fas fa-hand-point-right"/></div>
                        }
                    </div>
                </div> :
                LoadingFc()
        )
    }

    handleSettingsSubmit(e:any) {
        e.preventDefault();
        let tmp: WidgetUpdateInput = {};
        tmp.title = this.props.widget.title;
        tmp.settings = JSON.stringify(this.state.newSettings);
        GraphqlClient.mutate<UpdateWidgetMutationData, MutationUpdateWidgetArgs>({
            mutation: UPDATE_WIDGET_MUTATION,
            variables: {data: tmp, where: {id: this.props.widget.id}}
        }).then((res) => {
            this.setState({settings: this.state.newSettings})
        })
    }

    getSettings(): React.ReactNode {
        return (<form>
            <label style={{width: "100%", margin: "20px"}} className="matter-textfield-outlined">
                <input onChange={this.handleSettingsChange} value={this.state.newSettings.query} type="text" id="query" name="query" placeholder=" "/>
                <span>Default query :</span>
            </label>
            <label style={{width: "100%", margin: "20px"}} className="matter-textfield-outlined">
                <select onChange={this.handleSettingsChange} value={this.state.newSettings.category} id="category" name="category" placeholder=" ">
                    {AddPornHubWidget.mapCategoryEnum()}
                </select>
                <span>Default category :</span>
            </label>
            <button onClick={this.handleSettingsSubmit}>Save settings</button>
        </form>)
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
