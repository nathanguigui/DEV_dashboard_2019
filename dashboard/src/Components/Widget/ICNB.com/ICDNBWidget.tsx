import React, {ReactNode} from "react";
import DefaultWidget from "../DefaultWidget";
import {GraphqlClient} from "../../../App";
import {
    MutationUpdateWidgetArgs,
    WidgetUpdateInput
} from "../../../Graphql/clientTypes";
import LoadingFc from "../../miniComponent/loading";
import {UPDATE_WIDGET_MUTATION, UpdateWidgetMutationData} from "../../../Graphql/Widget/Mutation/UpdateWidget";
import {WidgetProps, IcnbWidgetSettings} from "../widgetTypes";
import AddIcnbWidget from "./addICNBWidget";

interface IcnbWidgetState {
    data: string
    loading: boolean
    settings: IcnbWidgetSettings
    selectedExplicit: string
}

class IcnbWidget extends React.Component<WidgetProps, IcnbWidgetState>{
    constructor(props:WidgetProps) {
        super(props);
        let settings: IcnbWidgetSettings = JSON.parse(props.widget.settings);
        this.state = {
            data: "",
            loading: true,
            settings: settings,
            selectedExplicit: ""
        };
        this.updateMe = this.updateMe.bind(this);
        this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
        this.triggerCornerClick = this.triggerCornerClick.bind(this);
        this.getContent = this.getContent.bind(this)
    }

    static getInitSettings(): ReactNode {
        return <AddIcnbWidget/>
    }

    updateMe(): void {
        fetch("https://api.icndb.com/jokes/random").then((promise) => {
            promise.json().then((return_value) => {
                console.log(parsing_obj.value.joke);
                this.setState({data: parsing_obj.value.joke});
            })
        });
    }
    triggerCornerClick(inSettings: boolean) {
    }
    componentDidMount(): void {
        this.updateMe();
    }
    getContent(): ReactNode {
        return (
            <div>
                Jokes: {this.state.data}<br/>
            </div>
        )
    }

    handleSettingsSubmit(e: any) {
        e.preventDefault();
        let tmp: WidgetUpdateInput = {};
        this.state.settings.explicit =this.state.selectedExplicit;
        tmp.settings = JSON.stringify(this.state.settings);
        GraphqlClient.mutate<UpdateWidgetMutationData, MutationUpdateWidgetArgs>({
            mutation: UPDATE_WIDGET_MUTATION,
            variables: {data: tmp, where: {id: this.props.widget.id}}
        }).then((res) => {
            this.setState( {settings: {explicit: this.state.selectedExplicit}})
        })
    }

    handleSettingsChange(e:any) {
        e.target.name === "checkbox" && (this.setState( {selectedExplicit: e.target.value}))
        console.log(this.state.selectedExplicit);
    }
    getSettings(): ReactNode {
        return (
            <form>
                <label style={{width: "100%", margin: "20px"}} className="matter-textfield-outlined">
                    <input onChange={this.handleSettingsChange} value={this.state.selectedExplicit} type="checkbox" id="checkbox" name="checkbox" placeholder=" "/>
                    <span>Do you want explicit joke ?</span>
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

export default IcnbWidget;