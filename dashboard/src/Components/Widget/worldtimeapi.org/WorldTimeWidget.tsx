import React, {ReactNode} from "react";
import WorldTimeApi from "../../../Types/worldtimeapi.org/types";
import moment from "moment";
import DefaultWidget from "../DefaultWidget";

interface WorldTimeWidgetState {
    data: WorldTimeApi.Ip | null
    loading: boolean
    timezoneList: Array<string>
}

class WorldTimeWidget extends  React.Component<Object, WorldTimeWidgetState> {
    constructor(props:Object) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            timezoneList: []
        };
        this.updateMe = this.updateMe.bind(this);
        this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
        this.getContent = this.getContent.bind(this)
    }

    updateMe(): void {
        fetch("http://worldtimeapi.org/api/ip").then((promise) => {
            promise.json().then((dataIp) => {
                this.setState({data: dataIp as WorldTimeApi.Ip})
            })
        })
    }

    loadSettingsData(): void {
        fetch("http://worldtimeapi.org/api/timezone").then((promise) => {
            promise.json().then((timezones:Array<string>) => {
                this.setState({timezoneList: timezones})
            })
        })
    }

    componentDidMount(): void {
        this.updateMe();
        this.loadSettingsData();
    }

    getContent(): ReactNode {
        return (
            this.state.data && this.state.data.utc_datetime ?
                <div>{moment.utc(this.state.data.utc_datetime).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div> :
                <div>Loading</div>
        )
    }

    handleSettingsSubmit(e: any) {
        e.preventDefault();
        console.log("ok");
    }

    handleSettingsChange(e: any) {

    }

    getSettings(): ReactNode {
        return (
            <form>
                <select>
                    <option style={{display: "none"}} selected value="" disabled>select timezone</option>
                    {this.state.timezoneList.map((timezone: string) => <option value={timezone}>{timezone}</option>)}
                </select>
                <button onClick={this.handleSettingsSubmit}>click me</button>
            </form>
        )
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <DefaultWidget updateContentFc={this.updateMe} content={this.getContent()} settings={this.getSettings()} widgetName={"WorldTimeWidget"}/>
        )
    }
}

export default WorldTimeWidget;
