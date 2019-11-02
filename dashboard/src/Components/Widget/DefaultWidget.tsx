import React, {ReactNode} from "react";
import {
    defaultWidgetContentStyle,
    defaultWidgetCornerStyle,
    defaultWidgetHeaderStyle, defaultWidgetNavbarStyle,
    defaultWidgetStyle
} from "../../Pages/homePage";
import Times from "../../Assets/times-solid.svg"
import Wrench from "../../Assets/wrench-solid.svg"
import Left from "../../Assets/caret-left-solid.svg"
import Right from "../../Assets/caret-right-solid.svg"
import Trash from "../../Assets/trash-alt-solid.svg"
import {Widget} from "../../Graphql/clientTypes";

interface DefaultWidgetState {
    inSettings: boolean
}

interface DefaultWidgetProps {
    updateContentFc: () => void
    content: ReactNode
    settings: ReactNode
    widget: Widget
    refreshRateSec: number
    triggerCornerClick: (inSettings: boolean) => void
    moveLeft: (widget:Widget) => void
    moveRight: (widget:Widget) => void
    remove: (widget:Widget) => void
}

class DefaultWidget extends  React.Component<DefaultWidgetProps, DefaultWidgetState> {
    private timer:any;
    constructor(props:DefaultWidgetProps) {
        super(props);
        this.state = {
            inSettings: false,
        };
        this.handleCornerClick = this.handleCornerClick.bind(this);
        this.handleLeftSide = this.handleLeftSide.bind(this);
        this.handleRightSide = this.handleRightSide.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleLeftSide(evt: any) {
        this.props.moveLeft(this.props.widget);
    }

    handleRightSide(evt: any) {
        this.props.moveRight(this.props.widget);
    }

    handleRemove(evt: any) {
        this.props.remove(this.props.widget);
    }

    handleCornerClick(evt: any) {
        this.props.triggerCornerClick(!this.state.inSettings);
        this.setState({inSettings: !this.state.inSettings})
    }

    componentDidMount(): void {
        this.props.updateContentFc();
        this.timer = setInterval(this.props.updateContentFc, 1000 * this.props.refreshRateSec);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="widget" style={{...defaultWidgetStyle, order: this.props.widget.order}}>
                <div style={defaultWidgetNavbarStyle}>
                    <div style={{height: "20px", width: "20px"}}><img style={{height: "100%"}} onClick={this.handleRemove} src={Trash} alt={"trash"}/></div>
                    {this.props.widget.order !== 1 && <div style={{height: "20px", width: "20px"}}><img style={{height: "100%"}} onClick={this.handleLeftSide} src={Left} alt={"left"}/></div>}
                    {<div style={{height: "20px", width: "20px"}}><img style={{height: "100%"}} onClick={this.handleRightSide} src={Right} alt={"right"}/></div>}
                    <div style={{height: "20px", width: "20px"}}><img style={{height: "100%"}} onClick={this.handleCornerClick} src={this.state.inSettings ? Times : Wrench} alt={"settings"}/></div>
                </div>
                <div style={defaultWidgetHeaderStyle}>
                    <h2 style={{marginTop: 0}}>{this.props.widget.title}</h2>
                </div>
                {!this.state.inSettings ?
                <div className="widgetContent" style={defaultWidgetContentStyle}>
                    {this.props.content}
                </div> :
                <div className="widgetSettings" style={defaultWidgetContentStyle}>
                    {this.props.settings}
                </div>
                }
            </div>
        )
    }
}

export default DefaultWidget;
