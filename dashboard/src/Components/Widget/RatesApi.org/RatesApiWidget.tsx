import React, {ReactNode} from "react";
import DefaultWidget from "../DefaultWidget";
import {GraphqlClient} from "../../../App";
import {
    MutationUpdateWidgetArgs,
    WidgetUpdateInput
} from "../../../Graphql/clientTypes";
import LoadingFc from "../../miniComponent/loading";
import {UPDATE_WIDGET_MUTATION, UpdateWidgetMutationData} from "../../../Graphql/Widget/Mutation/UpdateWidget";
import AddRatesApiWidget from "./addRatesApiWidget";
import {WidgetProps,RatesApiWidgetSettings } from "../widgetTypes";

interface RatesApiWidgetState {
    data: string
    loading: boolean
    settings: RatesApiWidgetSettings
    selectedCurrency: string
}

class RatesApiWidget extends React.Component<WidgetProps, RatesApiWidgetState>{
    constructor(props:WidgetProps) {
        super(props);
        let settings: RatesApiWidgetSettings = JSON.parse(props.widget.settings);
        this.state = {
            data: "",
            loading: true,
            settings:settings,
            selectedCurrency: "",
        }
        this.updateMe = this.updateMe.bind(this);
        this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
        this.triggerCornerClick = this.triggerCornerClick.bind(this);
        this.getContent = this.getContent.bind(this)
    }
    static getInitSettings(): ReactNode {
        return <AddRatesApiWidget/>
    }
    updateMe(): void {
        fetch("https://api.ratesapi.io/api/latest?base=EUR&symbols=" + this.state.settings.ChangeType).then((promise) => {
            promise.json().then((return_value) => {
                console.log(return_value.rates)
            })
        })
    }
    triggerCornerClick(inSettings: boolean) {
    }
    componentDidMount(): void {
        this.updateMe();
    }
    getContent(): ReactNode {
        return (
            <div>
                Value of EURO: {this.state.data}{this.state.selectedCurrency}<br/>
            </div>
        )
    }

    handleSettingsSubmit(e: any) {
        e.preventDefault();

        let tmp: WidgetUpdateInput = {};
        this.state.settings.ChangeType= this.state.selectedCurrency;
        tmp.settings = JSON.stringify(this.state.settings);
        GraphqlClient.mutate<UpdateWidgetMutationData, MutationUpdateWidgetArgs>({
            mutation: UPDATE_WIDGET_MUTATION,
            variables: {data: tmp, where: {id: this.props.widget.id}}
        }).then((res) => {
            this.setState( {settings: {ChangeType: this.state.selectedCurrency}})
        })
    }

    handleSettingsChange(e:any) {
        e.target.name === "value" && (this.setState( {selectedCurrency: e.target.value}))
    }
    getSettings(): ReactNode {
        return (
            <form>
                <label style={{width: "100%", margin: "20px"}} className="matter-textfield-outlined">
                    <input onChange={this.handleSettingsChange} value={this.state.selectedCurrency} type="value" id="value" name="value" placeholder=" "/>
                    <span>Input a number:</span>
                </label>
                <button onClick={this.handleSettingsSubmit}>click me</button>
            </form>
        )
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <DefaultWidget
                triggerCornerClick={this.triggerCornerClick} refreshRateSec={300} updateContentFc={this.updateMe}
                content={this.getContent()} settings={this.getSettings()} widget={this.props.widget}
                moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} remove={this.props.remove}
            />
        )
    }
}

export default RatesApiWidget;