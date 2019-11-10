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
        this.handleOpenVideo = this.handleOpenVideo.bind(this);
    }

    handleThumbnailsPlay = () => {
        if (this.state.thumbIndex == 0 && !this.state.isPlayingThumb) {
            setTimeout(() => {
                this.setState({thumbIndex: 0, isPlayingThumb: true})
            }, 500);
        }
    };

    handleOpenVideo = () => {
        window.open(this.props.video.url, this.props.video.title);
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
            <div style={{...VideoPreviewContainerStyle, margin: "10px"}}>
                <h4 onClick={this.handleOpenVideo} style={{cursor: "pointer"}}>{this.props.video.title}</h4>
                <img onClick={this.handleOpenVideo} style={{borderRadius: "5px", cursor: "pointer", maxWidth: "40%"}} alt="video preview" onMouseOver={this.handleThumbnailsPlay}
                     onMouseLeave={() => {this.setState({isPlayingThumb: false, thumbIndex: 0})}}
                     src={this.props.video.thumbs[this.state.thumbIndex].src}
                />
                <div style={VideoPreviewContainerStyle}>
                    <div style={{...VideoInfosStyle, width: "320px"}}>
                        <div>Duration: {this.props.video.duration}</div>
                        <div>Ratings: {this.props.video.ratings}</div>
                    </div>
                    <div style={{"maxWidth":"40%","textAlign":"center"}}>Categories: {this.props.video.categories.map((category) => category.category + " ")}</div>
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

const VideoInfosStyle: CSSProperties = {
    "display": "flex",
    "justifyContent": "space-between"
};

export default PornHubVideoPreview;
