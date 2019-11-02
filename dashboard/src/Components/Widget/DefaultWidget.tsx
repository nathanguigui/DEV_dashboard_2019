import React, {CSSProperties, ReactNode} from "react";
import {
    defaultWidgetContentStyle,
    defaultWidgetCornerStyle,
    defaultWidgetHeaderStyle,
    defaultWidgetNavbarButtonsStyle,
    defaultWidgetNavbarSingleButton,
    defaultWidgetNavbarStyle,
    defaultWidgetStyle
} from "../../Pages/homePage";
import Times from "../../Assets/times-solid.svg"
import Wrench from "../../Assets/wrench-solid.svg"
import Left from "../../Assets/caret-left-solid.svg"
import Right from "../../Assets/caret-right-solid.svg"
import Trash from "../../Assets/trash-alt-solid.svg"
import {Widget} from "../../Graphql/clientTypes";
import "../../Styles/subclass.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                    <div className="styled-button" role="button" onClick={this.handleRemove} style={{...defaultWidgetNavbarSingleButton, borderTopLeftRadius: "5px", borderLeft: "none!important", borderRight: "solid"}}>
                        <i style={IconStyle} className="fas styled-icons fa-trash-alt"/>
                    </div>
                    <div style={defaultWidgetNavbarButtonsStyle}>
                        {this.props.widget.order !== 1 && <div className="styled-button" role="button" onClick={this.handleLeftSide} style={defaultWidgetNavbarSingleButton}>
                          <i style={IconStyle} className="fas styled-icons fa-caret-left"/>
                        </div>}
                        {<div className="styled-button" role="button" onClick={this.handleRightSide} style={defaultWidgetNavbarSingleButton}>
                            <i style={IconStyle} className="fas styled-icons fa-caret-right"/>
                        </div>}
                        <div className="styled-button" role="button" onClick={this.handleCornerClick} style={{...defaultWidgetNavbarSingleButton, borderTopRightRadius: "5px"}}>
                            <i style={IconStyle} className="fas styled-icons fa-tools"/>
                        </div>
                    </div>
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

const IconStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export default DefaultWidget;
