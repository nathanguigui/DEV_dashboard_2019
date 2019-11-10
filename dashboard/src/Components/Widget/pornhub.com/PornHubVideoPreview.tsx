import React, {Component} from "react";
import {Ph_Video} from "../widgetTypes";

interface PornHubVideoPreviewProps {
    video: Ph_Video
}

interface PornHubVideoPreviewState {
    thumbIndex: number
    isPlayingThumb: boolean
}

class PornHubVideoPreview extends React.Component<PornHubVideoPreviewProps, PornHubVideoPreviewState> {

    constructor(props: PornHubVideoPreviewProps) {
        super(props);
        this.state = {
            thumbIndex: 0,
            isPlayingThumb: false
        };
        this.handleThumbnailsPlay = this.handleThumbnailsPlay.bind(this);
    }

    handleThumbnailsPlay = () => {
        setTimeout(() => {
            this.setState({thumbIndex: this.state.thumbIndex != 16 ? this.state.thumbIndex + 1 : 0, isPlayingThumb: true})
        })
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                {this.props.video.title}
                <img alt="video preview" onMouseOver={this.handleThumbnailsPlay} src={this.props.video.thumbs[this.state.thumbIndex].src}/>
            </div>
        )
    }
}

export default PornHubVideoPreview;
