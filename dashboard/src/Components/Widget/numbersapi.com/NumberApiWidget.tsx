import React, {ReactNode} from "react";
import DefaultWidget from "../DefaultWidget";
import {GraphqlClient} from "../../../App";
import {
    MutationUpdateWidgetArgs,
    WidgetUpdateInput
} from "../../../Graphql/clientTypes";
import LoadingFc from "../../miniComponent/loading";
import {UPDATE_WIDGET_MUTATION, UpdateWidgetMutationData} from "../../../Graphql/Widget/Mutation/UpdateWidget";
import AddNumbersApiWidget from "./addNumbersApiWidget";
import {WidgetProps, NumberApiWidgetSettings} from "../widgetTypes";

interface NumberApiWidgetState {
    data: string
    loading: boolean
    settings: NumberApiWidgetSettings
    selectedNumber: string
}

class  NumberApiWidget extends React.Component<WidgetProps, NumberApiWidgetState>{
    constructor(props:WidgetProps) {
        super(props);
        let settings: NumberApiWidgetSettings = JSON.parse(props.widget.settings);
        this.state = {
            data: "",
            loading: true,
            settings: settings,
            selectedNumber: "",
        };
        this.updateMe = this.updateMe.bind(this);
        this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
        this.triggerCornerClick = this.triggerCornerClick.bind(this);
        this.getContent = this.getContent.bind(this)
    }

    static getInitSettings(): ReactNode {
        return <AddNumbersApiWidget/>
    }
    updateMe(): void {
            fetch("http://numbersapi.com/" + this.state.settings.value).then((promise) => {
                promise.text().then((return_value) => {
                    this.setState({data: return_value.toString()})
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
                Fact: {this.state.data}<br/>
            </div>
        )
    }

    handleSettingsSubmit(e: any) {
        e.preventDefault();

        let tmp: WidgetUpdateInput = {};
        this.state.settings.value = this.state.selectedNumber;
        tmp.settings = JSON.stringify(this.state.settings);
        GraphqlClient.mutate<UpdateWidgetMutationData, MutationUpdateWidgetArgs>({
            mutation: UPDATE_WIDGET_MUTATION,
            variables: {data: tmp, where: {id: this.props.widget.id}}
        }).then((res) => {
            this.setState( {settings: {value: this.state.selectedNumber}})
        })
    }

    handleSettingsChange(e:any) {
        e.target.name === "number" && (this.setState( {selectedNumber: e.target.value}))
    }

    getSettings(): ReactNode {
        return (
                <form>
                    <label style={{width: "100%", margin: "20px"}} className="matter-textfield-outlined">
                    <input onChange={this.handleSettingsChange} value={this.state.selectedNumber} type="number" id="number" name="number" placeholder=" "/>
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


export default NumberApiWidget