import React, {ReactNode} from "react";
import WorldTimeApi from "../../../Types/worldtimeapi.org/types";
import momentTz from 'moment-timezone';
import moment from 'moment';
import DefaultWidget from "../DefaultWidget";
import {GraphqlClient} from "../../../App";
import {ME_PROFILE, MeQuerydata} from "../../../Graphql/User/Query/Me";
import {UPDATE_ME, UpdateMeMutationData} from "../../../Graphql/User/Mutation/UpdateMe";
import {
    MutationUpdateWidgetArgs,
    UpdateMeInput,
    UpdateMeWidgetsInput,
    Widget,
    WidgetUpdateInput
} from "../../../Graphql/clientTypes";
import LoadingFc from "../../miniComponent/loading";
import {UPDATE_WIDGET_MUTATION, UpdateWidgetMutationData} from "../../../Graphql/Widget/Mutation/UpdateWidget";

interface WorldTimeWidgetSettings {
    timezone: string
}

interface WorldTimeWidgetProps {
    widget: Widget
    moveLeft: (widget:Widget) => Promise<boolean>
    moveRight: (widget:Widget) => Promise<boolean>
    remove: (widget:Widget) => void
}

interface WorldTimeWidgetState {
    data: WorldTimeApi.Ip | null
    loading: boolean
    timezoneList: Array<string>
    settings: WorldTimeWidgetSettings
    selectedTimezoneForm: string
}

class WorldTimeWidget extends  React.Component<WorldTimeWidgetProps, WorldTimeWidgetState> {
    constructor(props:WorldTimeWidgetProps) {
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

    updateMe(): void {
        if (this.state.settings.timezone.length) {
            fetch("http://worldtimeapi.org/api/timezone/" + this.state.selectedTimezoneForm).then((promise) => {
                promise.json().then((dataIp) => {
                    this.setState({data: dataIp as WorldTimeApi.Ip})
                })
            })
        } else {
            fetch("http://worldtimeapi.org/api/ip").then((promise) => {
                promise.json().then((dataIp) => {
                    this.setState({data: dataIp as WorldTimeApi.Ip})
                })
            })
        }
    }

    loadSettingsData(): void {
        if (this.state.timezoneList.length === 0) {
            fetch("http://worldtimeapi.org/api/timezone").then((promise) => {
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
                <button onClick={this.handleSettingsSubmit}>click me</button>
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
