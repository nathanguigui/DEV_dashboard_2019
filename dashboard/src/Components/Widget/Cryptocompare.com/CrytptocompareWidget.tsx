import React, {ReactNode} from "react";
import DefaultWidget from "../DefaultWidget";
import {GraphqlClient} from "../../../App";
import {
    MutationUpdateWidgetArgs,
    WidgetUpdateInput
} from "../../../Graphql/clientTypes";
import LoadingFc from "../../miniComponent/loading";
import {UPDATE_WIDGET_MUTATION, UpdateWidgetMutationData} from "../../../Graphql/Widget/Mutation/UpdateWidget";
import AddCryptocompareWidget from  "./addCryptocompareWidget";
import {WidgetProps, CryptocompareWidgetSettings} from "../widgetTypes";


interface CryptocompareWidgetState {
    data: string | null
    loading: boolean
    settings: CryptocompareWidgetSettings
    CryptoTypeSelected: string
    ChangeTypeSelected: string
}

class CryptocompareWidget extends React.Component<WidgetProps, CryptocompareWidgetState> {
    constructor(props:WidgetProps) {
        super(props);
        let settings: CryptocompareWidgetSettings = JSON.parse(props.widget.settings);
        this.state = {
            settings: settings,
            data: "",
            loading: true,
            CryptoTypeSelected: "",
            ChangeTypeSelected: ""
        };
        this.updateMe = this.updateMe.bind(this);
        this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this);
        this.handleSettingsChange = this.handleSettingsChange.bind(this);
        this.triggerCornerClick = this.triggerCornerClick.bind(this);
        this.getContent = this.getContent.bind(this)
    }

    static getInitSettings(): ReactNode {
        return <AddCryptocompareWidget/>
    }

    updateMe(): void {
        fetch("https://min-api.cryptocompare.com/data/price?fsym=" + this.state.CryptoTypeSelected + "&tsyms=" + this.state.ChangeTypeSelected).then((promise) => {
            promise.json().then((USD) => {
                console.log(USD)
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
            this.state.data ?
                <div>
                    VALUE: {this.state.data}<br/>
                </div> :
                LoadingFc()
        )
    }

    handleSettingsSubmit(e: any) {
        e.preventDefault();
        console.log("3");

        let tmp: WidgetUpdateInput = {};
        tmp.title = this.props.widget.title;
        this.state.settings.ChangeType = this.state.ChangeTypeSelected;
        this.state.settings.CryptoType = this.state.CryptoTypeSelected;
        tmp.settings = JSON.stringify(this.state.settings);
        GraphqlClient.mutate<UpdateWidgetMutationData, MutationUpdateWidgetArgs>( {
            mutation: UPDATE_WIDGET_MUTATION,
            variables: {data: tmp, where: {id: this.props.widget.id}}
        }).then((res) => {
            this.setState({settings: {CryptoType: this.state.CryptoTypeSelected, ChangeType: this.state.ChangeTypeSelected}})
        })
    }
    handleSettingsChange(e: any) {
        e.target.name === "CryptoTypeSelect" && (this.setState({CryptoTypeSelected: e.target.value}));
        e.target.name === "ChangeTypeSelect" && (this.setState({ChangeTypeSelected: e.target.value}));
    }

    getSettings(): ReactNode {
        return (
            <form>
                <input name="CryptoTypeSelect" onChange={this.handleSettingsChange} value={this.state.CryptoTypeSelected}/>
                <input name="ChangeTypeSelect" onChange={this.handleSettingsChange} value={this.state.ChangeTypeSelected}/>
                <button onClick={this.handleSettingsSubmit}>Click Me </button>
            </form>
        )
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <DefaultWidget updateContentFc={this.updateMe} content={this.getContent()} settings={this.getSettings()}
                           widget={this.props.widget} refreshRateSec={300} triggerCornerClick={this.triggerCornerClick}
                           moveLeft={this.props.moveLeft} moveRight={this.props.moveRight} remove={this.props.remove}
            />
        )
    }
}

export default CryptocompareWidget;