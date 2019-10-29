import React from "react";
import {defaultWidgetStyle} from "../../../Pages/homePage";
import WorldTimeApi from "../../../Types/worldtimeapi.org/types";
import moment from "moment";

interface WorldTimeWidgetState {
    inSettings: boolean
    data: WorldTimeApi.Ip | null
}

class WorldTimeWidget extends  React.Component<Object, WorldTimeWidgetState> {
    private timer:any;
    constructor(props:Object) {
        super(props);
        this.state = {
            inSettings: false,
            data: null
        };
        this.updateMe = this.updateMe.bind(this)
    }

    updateMe(): void {
        fetch("http://worldtimeapi.org/api/ip").then((promise) => {
            promise.json().then((dataIp) => {
                this.setState({data: dataIp as WorldTimeApi.Ip})
            })
        })
    }

    componentDidMount(): void {
        this.updateMe();
        this.timer = setInterval(this.updateMe, 5000);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div style={defaultWidgetStyle}>
                {this.state.data && this.state.data.utc_datetime ?

                    <p>{moment.utc(this.state.data.utc_datetime).format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>:<p>Loading</p>
                }
            </div>
        )
    }
}

export default WorldTimeWidget;
