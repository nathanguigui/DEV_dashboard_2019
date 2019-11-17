import React, {ReactNode} from "react";
import {
    Ph_Categories,
    Ph_Response,
    Ph_UrlParams,
    Weather_Response,
    WeatherSettings,
    WidgetProps
} from "../widgetTypes";
import DefaultWidget from "../DefaultWidget";
import LoadingFc from "../../miniComponent/loading";
import {MutationUpdateWidgetArgs, WidgetUpdateInput} from "../../../Graphql/clientTypes";
import {GraphqlClient} from "../../../App";
import {UPDATE_WIDGET_MUTATION, UpdateWidgetMutationData} from "../../../Graphql/Widget/Mutation/UpdateWidget";
import AddOpenWeatherWidget from "./addOpenWeatherApi";

interface WeatherWidgetState {
    loading: boolean
    settings: WeatherSettings
    newSettings: WeatherSettings
    query: string
    data: Weather_Response | undefined
    currentVideoIdx: number
}

class WeatherWidget extends React.Component<WidgetProps, WeatherWidgetState> {
    constructor(props:WidgetProps) {
        super(props);
        let settings: WeatherSettings = JSON.parse(props.widget.settings);
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
        return <AddOpenWeatherWidget/>
    }

    componentDidMount(): void {
        this.updateMe();
    }

    updateMe() {
        let fetchUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + this.state.settings.city + "&APPID=61ef027c19b55517118a71f9c80d1d48";
        fetch(fetchUrl).then((promise) => {
            promise.json().then((res: Weather_Response) => {
                this.setState({data: res, loading: false})
            })
        })
    }

    triggerCornerClick() {

    }

    handleSettingsChange(e: any) {
        let tmp = this.state.newSettings;
        e.target.name === "query" && (tmp.city = e.target.value);
        console.log(e.target.value);
        this.setState({newSettings: tmp});
        this.updateMe();
    }

    getContent(): React.ReactNode {
        return (!this.state.loading && this.state.data ?
                <div>
                    {this.state.settings.city} <br/>
                    {this.state.data.main.temp-273.15}°C<br/>
                    {this.state.data.main.humidity}hPa<br/>
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
                <input onChange={this.handleSettingsChange} value={this.state.newSettings.city} type="text" id="query" name="query" placeholder=" "/>
                <span>City :</span>
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

export default WeatherWidget;
