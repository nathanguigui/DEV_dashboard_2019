import React from "react";
import {WidgetCreateInput, WidgetType} from "../../../Graphql/clientTypes";
import {addMeWidget, AUTO_WIDGET_ORDER} from "../utils/newWidget";
import {AddWidgetForm} from "../utils/addWidgetForm";

interface AddIcnbWidgetState {
    name: string
    explicit: string
    loading: boolean
}

class AddIcnbWidget extends React.Component<Object, AddIcnbWidgetState>{
    constructor(props:any) {
        super(props);
        this.state = {
            name: "",
            explicit: "",
            loading: true
        };
        this.createWidget = this.createWidget.bind(this);
        this.getFormContent = this.getFormContent.bind(this);
    }
    componentDidMount(): void {
    }

    createWidget = () => {
        let newWidget: WidgetCreateInput = {
            title:this.state.name,
            settings: '{"explicit": "' + this.state.explicit + '"}',
            type: WidgetType.Icdnb,
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
                    <input onChange={(e:any) => {this.setState({explicit: e.target.value})}} value={this.state.explicit} type="checkbox" id="checkbox" name="checkbox" placeholder=" "/>
                    <span>Do you want explicit joke ?</span>
                </label>
            </>
        )

    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            AddWidgetForm({
                formTitle: "Add Jokes about Chuck ?",
                formValidationFc: this.createWidget,
                formContent: this.getFormContent()
            })
        )
    }
}

export default AddIcnbWidget;