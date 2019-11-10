import React, {Component, CSSProperties} from "react";
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
        if (this.state.thumbIndex == 0 && !this.state.isPlayingThumb) {
            setTimeout(() => {
                this.setState({thumbIndex: 0, isPlayingThumb: true})
            }, 500);
        }
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        if (this.state.isPlayingThumb) {
            if (this.state.thumbIndex + 1 < this.props.video.thumbs.length) {
                setTimeout(() => {
                    this.setState({thumbIndex: this.state.thumbIndex < this.props.video.thumbs.length ? this.state.thumbIndex + 1 : 0})
                }, 500);
            } else
                this.setState({isPlayingThumb: false, thumbIndex: 0});
        }
        return (
            <div style={VideoPreviewContainerStyle}>
                <h4>{this.props.video.title}</h4>
                <img style={{borderRadius: "5px"}} alt="video preview" onMouseOver={this.handleThumbnailsPlay}
                     onMouseLeave={() => {this.setState({isPlayingThumb: false, thumbIndex: 0})}}
                     src={this.props.video.thumbs[this.state.thumbIndex].src}
                />
                <div>
                    <div>Duration: {this.props.video.duration}</div>
                    <div>Ratings: {this.props.video.ratings}</div>
                    <div>Categories: {this.props.video.categories.map((category) => category + " ")}</div>
                </div>

            </div>
        )
    }
}

const VideoPreviewContainerStyle: CSSProperties = {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center"
};

export default PornHubVideoPreview;
