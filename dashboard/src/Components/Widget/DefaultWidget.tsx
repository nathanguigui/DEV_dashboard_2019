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
import {Widget} from "../../Graphql/clientTypes";
import "../../Styles/subclass.css"
import "../../Styles/draw.css"
import ContentEditable from 'react-contenteditable'
import {GraphqlClient} from "../../App";
import {UPDATE_WIDGET_MUTATION} from "../../Graphql/Widget/Mutation/UpdateWidget";

interface DefaultWidgetState {
    inSettings: boolean
    editingTitle: boolean
    title: string
    neddSave: boolean
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
    private editableTitle:any;
    constructor(props:DefaultWidgetProps) {
        super(props);
        this.state = {
            inSettings: false,
            editingTitle: true,
            title: this.props.widget.title,
            neddSave: false
        };
        this.handleCornerClick = this.handleCornerClick.bind(this);
        this.handleLeftSide = this.handleLeftSide.bind(this);
        this.handleRightSide = this.handleRightSide.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEditTitle = this.handleEditTitle.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.editableTitle = React.createRef();
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

    handleEditTitle(e: any): void {
        this.setState({title: e.target.value, neddSave: true});
        console.log(e.target.value);
    }

    handleSave(): void {
        GraphqlClient.mutate({mutation: UPDATE_WIDGET_MUTATION, variables: {
            where: {id: this.props.widget.id}, data: {title: this.state.title
        }}}).then((res) => {
            this.setState({neddSave: false})
        })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className="widget" style={{...defaultWidgetStyle, order: this.props.widget.order, boxShadow : "0 0 8px 0 rgba(0, 0, 0 ,0.30)", margin: 10}}>
                <div style={defaultWidgetNavbarStyle}>
                    <div className="styled-button" role="button" onClick={this.handleRemove} style={{...defaultWidgetNavbarSingleButton, borderTopLeftRadius: "5px", borderLeft: "none!important", borderRight: "solid"}}>
                        <i style={IconStyle} className="fas styled-icons fa-trash-alt"/>
                    </div>
                    <div style={defaultWidgetNavbarButtonsStyle}>
                        {this.props.widget.order !== 1 && <div className="styled-button" role="button" onClick={this.handleLeftSide} style={defaultWidgetNavbarSingleButton}>
                          <i title="move left" style={IconStyle} className="fas styled-icons fa-caret-left"/>
                        </div>}
                        {<div className="styled-button" role="button" onClick={this.handleRightSide} style={defaultWidgetNavbarSingleButton}>
                            <i title="move right" style={IconStyle} className="fas styled-icons fa-caret-right"/>
                        </div>}
                        {this.state.neddSave && <div className="styled-button" role="button" onClick={this.handleSave} style={defaultWidgetNavbarSingleButton}>
                          <i title="save" style={IconStyle} className="far styled-icons fa-save"/>
                        </div>}
                        <div className="styled-button" role="button" onClick={this.handleCornerClick} style={{...defaultWidgetNavbarSingleButton, borderTopRightRadius: "5px"}}>
                            <i title="settings" style={IconStyle} className="fas styled-icons fa-tools"/>
                        </div>
                    </div>
                </div>
                <div style={defaultWidgetHeaderStyle}>
                    <ContentEditable innerRef={this.editableTitle} html={this.state.title} disabled={false}
                                     onChange={this.handleEditTitle} tagName={"h2"}/>
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
