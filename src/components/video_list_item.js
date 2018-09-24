import React from 'react';

const VideoListItem = (props) => {
    // link to thumbnail pic
    const imageUrl = props.video.snippet.thumbnails.default.url;
    console.log(props.video.snippet.title);
    return (
        <li onClick={() => props.onSelectVideo(props.video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading" >{props.video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;