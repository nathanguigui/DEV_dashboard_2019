import React, {ReactNode} from "react";
import WorldTimeApi from "../../../Types/worldtimeapi.org/types";
import momentTz from 'moment-timezone';
import moment from 'moment';
import DefaultWidget from "../DefaultWidget";
import {GraphqlClient} from "../../../App";
import {ME_PROFILE, MeQuerydata} from "../../../Graphql/User/Query/Me";
import {UPDATE_ME, UpdateMeMutationData} from "../../../Graphql/User/Mutation/UpdateMe";
import {UpdateMeInput} from "../../../Graphql/clientTypes";
import LoadingFc from "../../miniComponent/loading";

interface WorldTimeWidgetState {
    data: WorldTimeApi.Ip | null
    loading: boolean
    timezoneList: Array<string>
    userTimezone: string
    selectedTimezoneForm: string
}

class WorldTimeWidget extends  React.Component<Object, WorldTimeWidgetState> {
    constructor(props:Object) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            timezoneList: [],
            userTimezone: "",
            selectedTimezoneForm: ""
        };
        this.updateMe = this.updateMe.bind(this);
        this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
        this.loadSettingsData = this.loadSettingsData.bind(this);
        this.triggerCornerClick = this.triggerCornerClick.bind(this);
        this.getContent = this.getContent.bind(this)
    }

    updateMe(): void {
        if (this.state.userTimezone.length) {
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
            GraphqlClient.query<MeQuerydata>({query: ME_PROFILE}).then((res) => {
                res.data.me && res.data.me.timezone && this.setState({userTimezone: res.data.me.timezone, loading: false, selectedTimezoneForm: res.data.me.timezone})
            })
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
                    Timezone: {this.state.userTimezone}<br/>
                    {
                        moment().day(this.state.data.day_of_week).format("dddd") + " " + this.state.data.datetime.split("T")[1].split(".")[0]

                    }
                </div> :
                LoadingFc()
        )
    }

    handleSettingsSubmit(e: any) {
        e.preventDefault();

        let tmp: UpdateMeInput = {};
        tmp.timezone = this.state.selectedTimezoneForm;
        GraphqlClient.mutate({mutation: UPDATE_ME, variables: {data: tmp}}).then((res) => {
            this.setState({userTimezone: this.state.selectedTimezoneForm})
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
                triggerCornerClick={this.triggerCornerClick} refreshRateSec={3} updateContentFc={this.updateMe}
                content={this.getContent()} settings={this.getSettings()} widgetName={"WorldTimeWidget"}
            />
        )
    }
}

export default WorldTimeWidget;
