import React, {Component} from "react";
import {WidgetCreateInput, WidgetType} from "../../../Graphql/clientTypes";
import {addMeWidget, AUTO_WIDGET_ORDER} from "../utils/newWidget";
import {AddWidgetForm} from "../utils/addWidgetForm";

interface AddOpenWeatherWidgetState {
    city: string
    name: string
}

class AddOpenWeatherWidget extends Component<Object, AddOpenWeatherWidgetState> {

    constructor(props:Object) {
        super(props);
        this.state = {
            city: "",
            name: "",
        }
    }


    createWidget = () => {
        let newWidget: WidgetCreateInput = {
            settings: '{' +
                    '"city": "' + this.state.city + '"' +
                '}',
            title: this.state.name,
            type: WidgetType.Openweathermap,
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
                    <input onChange={(e:any) => {this.setState({name: e.target.value})}} value={this.state.name} type="text" id="title" name="title" placeholder=" "/>
                    <span>Title :</span>
                </label>
                <label style={{width: "100%", margin: "20px"}} className="matter-textfield-outlined">
                    <input onChange={(e:any) => {this.setState({city: e.target.value})}} value={this.state.city} type="text" id="city" name="city" placeholder=" "/>
                    <span>City :</span>
                </label>
            </>
        )
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            AddWidgetForm({
                formTitle: "Add OpenWeather Widget",
                formContent: this.getFormContent(),
                formValidationFc: this.createWidget
            })
        );
    }

}

export default AddOpenWeatherWidget;
