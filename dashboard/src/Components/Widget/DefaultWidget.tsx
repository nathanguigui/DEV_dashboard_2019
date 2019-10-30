import React, {ReactNode} from "react";
import {
    defaultWidgetContentStyle,
    defaultWidgetCornerStyle,
    defaultWidgetHeaderStyle,
    defaultWidgetStyle
} from "../../Pages/homePage";
import Times from "../../Assets/times-solid.svg"
import Wrench from "../../Assets/wrench-solid.svg"

interface DefaultWidgetState {
    inSettings: boolean
}

interface DefaultWidgetProps {
    updateContentFc: () => void
    content: ReactNode
    settings: ReactNode
    widgetName: string
}

class DefaultWidget extends  React.Component<DefaultWidgetProps, DefaultWidgetState> {
    private timer:any;
    constructor(props:DefaultWidgetProps) {
        super(props);
        this.state = {
            inSettings: false,
        };
        this.handleCornerClick = this.handleCornerClick.bind(this);
    }

    handleCornerClick(evt: any) {
        this.setState({inSettings: !this.state.inSettings})
    }

    componentDidMount(): void {
        this.props.updateContentFc();
        this.timer = setInterval(this.props.updateContentFc, 5000);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="widget" style={defaultWidgetStyle}>
                <div style={defaultWidgetHeaderStyle}>
                    <h2 style={{marginTop: 0}}>{this.props.widgetName}</h2>
                    <div style={defaultWidgetCornerStyle}><img onClick={this.handleCornerClick} src={this.state.inSettings ? Times : Wrench} alt={"settings"}/></div>
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
