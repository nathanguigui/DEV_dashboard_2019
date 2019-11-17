import React, {Component} from "react";
import {WidgetCreateInput, WidgetType} from "../../../Graphql/clientTypes";
import {addMeWidget, AUTO_WIDGET_ORDER} from "../utils/newWidget";
import {AddWidgetForm} from "../utils/addWidgetForm";
import {Ph_Categories} from "../widgetTypes";

interface AddPornHubWidgetState {
    query: string
    name: string
    category: Ph_Categories;
}

class AddPornHubWidget extends Component<Object, AddPornHubWidgetState> {

    constructor(props:Object) {
        super(props);
        this.state = {
            query: "",
            name: "",
            category: Ph_Categories.PH_BLONDE
        }
    }


    createWidget = () => {
        let newWidget: WidgetCreateInput = {
            settings: '{' +
                    '"query": "' + this.state.query + '",' +
                    '"category": "' + this.state.category + '"' +
                '}',
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

    static mapCategoryEnum = (): React.ReactNode => {
        return Object.keys(Ph_Categories).map((key: any, idx: number) => {
            return (<option value={Object.values(Ph_Categories)[idx]}>{Object.values(Ph_Categories)[idx]}</option>)
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
                    <input onChange={(e:any) => {this.setState({query: e.target.value})}} value={this.state.query} type="text" id="query" name="query" placeholder=" "/>
                    <span>Default query :</span>
                </label>
                <label style={{width: "100%", margin: "20px"}} className="matter-textfield-outlined">
                    <select onChange={(e:any) => {this.setState({category: e.target.value})}} value={this.state.category} id="category" name="category" placeholder=" ">
                        {AddPornHubWidget.mapCategoryEnum()}
                    </select>
                    <span>Default category :</span>
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
