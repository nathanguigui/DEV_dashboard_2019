import React, {Component} from "react";
import {WidgetCreateInput, WidgetType} from "../../../Graphql/clientTypes";
import {addMeWidget, AUTO_WIDGET_ORDER} from "../utils/newWidget";
import {AddWidgetForm} from "../utils/addWidgetForm";

interface AddPornHubWidgetState {
    query: string
    name: string
}

class AddPornHubWidget extends Component<Object, AddPornHubWidgetState> {

    constructor(props:Object) {
        super(props);
        this.state = {
            query: "",
            name: ""
        }
    }


    createWidget = () => {
        let newWidget: WidgetCreateInput = {
            settings: '{"query": "' + this.state.query + '"}',
            title: this.state.name,
            type: WidgetType.Pornhub,
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
                    <input onChange={(e:any) => {this.setState({query: e.target.value})}} value={this.state.query} type="query" id="query" name="query" placeholder=" "/>
                    <span>Default query :</span>
                </label>
            </>
        )
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            AddWidgetForm({
                formTitle: "Add PornHub Widget",
                formContent: this.getFormContent(),
                formValidationFc: this.createWidget
            })
        );
    }

}

export default AddPornHubWidget;
