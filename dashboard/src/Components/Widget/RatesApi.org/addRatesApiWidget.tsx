import React from "react";
import {WidgetCreateInput, WidgetType} from "../../../Graphql/clientTypes";
import LoadingFc from "../../miniComponent/loading";
import {addMeWidget, AUTO_WIDGET_ORDER} from "../utils/newWidget";
import {AddWidgetForm} from "../utils/addWidgetForm";

interface AddRatesApiWidgetState {
    name: string
    value: string
    loading: boolean
}

class AddRatesApiWidget extends React.Component<Object, AddRatesApiWidgetState>{
    constructor(props: any) {
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
            settings: '{"ChangeType": "' + this.state.value + '"}',
            title: this.state.name,
            type: WidgetType.RatesApi,
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
                    <select onChange={(e:any) => {this.setState({value: e.target.value})}} value={this.state.value} id="ChangeType" name="ChangeType" placeholder=" ">
                        <option value="GBP">Livre sterling</option>
                        <option value="HKD">Dollar de Hong Kong</option>
                        <option value="IDR">Roupie indonésienne</option>
                        <option value="ILS">Shekel</option>
                        <option value="DKK">Couronne Danoise</option>
                        <option value="INR">Roupie indienne</option>
                        <option value="CNY">Renminbi</option>
                        <option value="USD">US Dollar</option>
                        <option value="CAD">Canadian Dollar</option>
                    </select>
                    <span>Input Monnaie:</span>
                </label>
            </>
        )
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            AddWidgetForm({
                formTitle: "Add euro converter",
                formValidationFc: this.createWidget,
                formContent: this.getFormContent()
            })
        )
    }
}

export default AddRatesApiWidget;
