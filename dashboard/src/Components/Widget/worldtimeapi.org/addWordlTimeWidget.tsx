import React from "react";
import {WidgetCreateInput, WidgetType} from "../../../Graphql/clientTypes";
import LoadingFc from "../../miniComponent/loading";
import {addMeWidget, AUTO_WIDGET_ORDER} from "../utils/newWidget";
import {AddWidgetForm} from "../utils/addWidgetForm";

interface AddWordlTimeWidgetState {
    name: string
    timezone: string
    timezoneList: Array<string>
    loading: boolean
}

class AddWordlTimeWidget extends React.Component<Object, AddWordlTimeWidgetState> {

    constructor(props:any) {
        super(props);
        this.state = {
            name: "",
            timezone: "",
            timezoneList: [],
            loading: true
        };
        this.createWidget = this.createWidget.bind(this);
        this.getFormContent = this.getFormContent.bind(this);
    }

    loadSettingsData(): void {
        if (this.state.timezoneList.length === 0) {
            fetch("http://worldtimeapi.org/api/timezone").then((promise) => {
                promise.json().then((timezones:Array<string>) => {
                    this.setState({timezoneList: timezones, loading: false})
                })
            });
        }
    }

    componentDidMount(): void {
        this.loadSettingsData();
    }

    createWidget = () => {
        let newWidget: WidgetCreateInput = {
            settings: '{"timezone": "' + this.state.timezone + '"}',
            title: this.state.name,
            type: WidgetType.WorldTime,
            order: AUTO_WIDGET_ORDER
        };
        addMeWidget(newWidget).then((success:boolean) => {
            if (success)
                window.location.reload();
            else
                console.warn("cant create widget")
        })
    };

    getFormContent = (): React.ReactNode => {
        return (
            <>
                <label style={{width: "100%", margin: "20px"}} className="matter-textfield-outlined">
                    <input onChange={(e:any) => {this.setState({name: e.target.value})}} value={this.state.name} type="title" id="title" name="title" placeholder=" "/>
                    <span>Title :</span>
                </label>
                <label style={{width: "100%", margin: "20px"}} htmlFor={"timezone"} className="matter-textfield-outlined">
                    <select onChange={(e:any) => {this.setState({timezone: e.target.value}); console.log(e.target.value)}} value={this.state.timezone} id="timezone" name="timezone" placeholder=" ">
                        {this.state.timezoneList.map((tz: string) => {
                            return <option value={tz}>{tz}</option>
                        })}
                    </select>
                    <span>Timezone :</span>
                </label>
            </>
        )
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        if (this.state.loading)
            return (
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                {LoadingFc()}
            </div>);
        return (
            AddWidgetForm({
                formTitle: "Add World Time Widget",
                formValidationFc: this.createWidget,
                formContent: this.getFormContent()
            })
        )
    }

}

export default AddWordlTimeWidget;
