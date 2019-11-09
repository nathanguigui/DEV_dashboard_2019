import React from "react";
import {WidgetCreateInput, WidgetType} from "../../../Graphql/clientTypes";
import {addMeWidget, AUTO_WIDGET_ORDER} from "../utils/newWidget";
import LoadingFc from "../../miniComponent/loading";
import {AddWidgetForm} from "../utils/addWidgetForm";


interface AddCryptoCompareWidgetState {
    name: string
    CryptoType: string
    ChangeType: string
    loading: boolean
}

class AddCryptocompareWidget extends  React.Component<Object, AddCryptoCompareWidgetState>{
    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            CryptoType: "BTC",
            ChangeType: "USD",
            loading: true
        };
        this.createWidget = this.createWidget.bind(this);
        this.getFormContent = this.getFormContent.bind(this);
    }

    createWidget = () => {
        let newWidget: WidgetCreateInput = {
            settings: '{"CryptoType: "' + this.state.CryptoType + '", "ChangeType: "' + this.state.ChangeType + '"}',
            title: this.state.name,
            type: WidgetType.Cryptocompare,
            order: AUTO_WIDGET_ORDER
        };
        addMeWidget(newWidget).then((success:boolean) => {
            if (success)
                window.location.reload();
            else
                console.warn("cant create widget")
        })
    };
    componentDidMount(): void {
    }

    getFormContent = (): React.ReactNode => {
        return (
            <>
                <label style={{width: "100%", margin: "20px"}} className="matter-textfield-outlined">
                    <input onChange={(e:any)=> {this.setState({name: e.target.value})}} value={this.state.name} type="title" id="title" name="title" placeholder=" "/>
                    <span>Title :</span>
                </label>
                <label style={{width: "100%", margin: "20px"}} htmlFor={"CryptoType"} className="matter-textfield-outlined">
                    <input onChange={(e:any)=> {this.setState( {CryptoType: e.target.value})}} value={this.state.CryptoType} type="Cryptotype" id="Cryptotype" name="Cryptotype" placeholder=" "/>
                    <span>Crypto type:</span>
                </label>
                <label style={{width: "100%", margin: "20px"}} htmlFor={"ChangeType"} className="matter-textfield-outlined">
                    <input onChange={(e:any)=> {this.setState( {ChangeType: e.target.value})}} value={this.state.ChangeType} type="ChangeType" id="ChangeType" name="ChangeType" placeholder=" "/>
                    <span>Change type:</span>
                </label>
            </>
        )
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            AddWidgetForm({
                formTitle: "Add Cryptocompare Widget",
                formValidationFc: this.createWidget,
                formContent: this.getFormContent()
            })
        );
    }
}

export default AddCryptocompareWidget;