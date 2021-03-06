import React, {ReactNode} from "react";
import WorldTimeApi from "../../../Types/worldtimeapi.org/types";
import moment from 'moment';
import DefaultWidget from "../DefaultWidget";
import {GraphqlClient} from "../../../App";
import {
    MutationUpdateWidgetArgs,
    WidgetUpdateInput
} from "../../../Graphql/clientTypes";
import LoadingFc from "../../miniComponent/loading";
import {UPDATE_WIDGET_MUTATION, UpdateWidgetMutationData} from "../../../Graphql/Widget/Mutation/UpdateWidget";
import AddWordlTimeWidget from "./addWordlTimeWidget";
import {WidgetProps, WorldTimeWidgetSettings} from "../widgetTypes";


interface WorldTimeWidgetState {
    data: WorldTimeApi.Ip | null
    loading: boolean
    timezoneList: Array<string>
    settings: WorldTimeWidgetSettings
    selectedTimezoneForm: string
}

class WorldTimeWidget extends  React.Component<WidgetProps, WorldTimeWidgetState> {
    constructor(props:WidgetProps) {
        super(props);
        let settings: WorldTimeWidgetSettings = JSON.parse(props.widget.settings);
        this.state = {
            data: null,
            loading: true,
            timezoneList: [],
            settings: settings,
            selectedTimezoneForm: settings.timezone
        };
        this.updateMe = this.updateMe.bind(this);
        this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
        this.loadSettingsData = this.loadSettingsData.bind(this);
        this.triggerCornerClick = this.triggerCornerClick.bind(this);
        this.getContent = this.getContent.bind(this)
    }

    static getInitSettings(): ReactNode {
        return <AddWordlTimeWidget/>
    }

    updateMe(): void {
        if (this.state.settings.timezone.length) {
            fetch("https://worldtimeapi.org/api/timezone/" + this.state.selectedTimezoneForm).then((promise) => {
                promise.json().then((dataIp) => {
                    this.setState({data: dataIp as WorldTimeApi.Ip})
                })
            })
        } else {
            fetch("https://worldtimeapi.org/api/ip").then((promise) => {
                promise.json().then((dataIp) => {
                    this.setState({data: dataIp as WorldTimeApi.Ip})
                })
            })
        }
    }

    loadSettingsData(): void {
        if (this.state.timezoneList.length === 0) {
            fetch("https://worldtimeapi.org/api/timezone").then((promise) => {
                promise.json().then((timezones:Array<string>) => {
                    this.setState({timezoneList: timezones})
                })
            });
        }
    }

    triggerCornerClick(inSettings: boolean) {
        this.loadSettingsData();
    }

    componentDidMount(): void {
        this.loadSettingsData();
        this.updateMe();
    }

    getContent(): ReactNode {
        return (
            this.state.data && this.state.data.utc_datetime ?
                <div>
                    Timezone: {this.state.settings.timezone}<br/>
                    {
                        moment().day(this.state.data.day_of_week).format("dddd") + " " + this.state.data.datetime.split("T")[1].split(".")[0]

                    }
                </div> :
                LoadingFc()
        )
    }

    handleSettingsSubmit(e: any) {
        e.preventDefault();

        let tmp: WidgetUpdateInput = {};
        tmp.title = this.props.widget.title;
        this.state.settings.timezone = this.state.selectedTimezoneForm;
        tmp.settings = JSON.stringify(this.state.settings);
        GraphqlClient.mutate<UpdateWidgetMutationData, MutationUpdateWidgetArgs>({
            mutation: UPDATE_WIDGET_MUTATION,
            variables: {data: tmp, where: {id: this.props.widget.id}}
        }).then((res) => {
            this.setState({settings: {timezone: this.state.selectedTimezoneForm}})
        })
    }

    handleSettingsChange(e: any) {
        e.target.name === "timezoneSelect" && (this.setState({selectedTimezoneForm: e.target.value}))
    }

    getSettings(): ReactNode {
        return (
            <form>
                <select name="timezoneSelect" onChange={this.handleSettingsChange} value={this.state.selectedTimezoneForm}>
                    <option style={{display: "none"}} value="" disabled>select timezone</option>
                    {this.state.timezoneList.map((timezone: string) => <option value={timezone}>{timezone}</option>)}
                </select>
                <button onClick={this.handleSettingsSubmit}>Update settings</button>
            </form>
        )
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <DefaultWidget
                triggerCornerClick={this.triggerCornerClick} refreshRateSec={300} updateContentFc={this.updateMe}
                content={this.getContent()} settings={this.getSettings()} widget={this.props.widget}
                moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} remove={this.props.remove}
            />
        )
    }
}

export default WorldTimeWidget;
