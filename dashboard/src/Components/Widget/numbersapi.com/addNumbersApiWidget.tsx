import React from "react";
import {WidgetCreateInput, WidgetType} from "../../../Graphql/clientTypes";
import LoadingFc from "../../miniComponent/loading";
import {addMeWidget, AUTO_WIDGET_ORDER} from "../utils/newWidget";
import {AddWidgetForm} from "../utils/addWidgetForm";

interface AddNumberApiWidgetState {
    name: string
    value: string
    loading: boolean
}

class AddNumbersApiWidget extends React.Component<Object, AddNumberApiWidgetState> {

    constructor(props:any) {
        super(props);
        this.state = {
            name: "",
            value: "",
            loading: true
        };
        this.createWidget = this.createWidget.bind(this);
        this.getFormContent = this.getFormContent.bind(this);
    }
    componentDidMount(): void {
    }

    createWidget = () => {
        let newWidget: WidgetCreateInput = {
            settings: '{"value": "' + this.state.value + '"}',
            title: this.state.name,
            type: WidgetType.NumbersApi,
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
            <label style={{width: "100%", margin: "20px"}} className="matter-textfield-outlined">
                <input onChange={(e:any) => {this.setState({value: e.target.value})}} value={this.state.value} type="number" id="number" name="number" placeholder=" "/>
                <span>Input a number:</span>
            </label>
            </>
        )
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            AddWidgetForm({
                formTitle: "Add a fact about a number",
                formValidationFc: this.createWidget,
                formContent: this.getFormContent()
            })
        )
    }
}

export default AddNumbersApiWidget;