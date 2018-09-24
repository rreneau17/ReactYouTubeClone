import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

    // create list of videos
    const videoItems = props.videos.map((video) => {
        return <VideoListItem 
            video={video}
            key={video.etag}
            onSelectVideo={props.onSelectVideo}/>
    });

    return (
        <div className="col-md-4 list-group">
            <ul>{videoItems}</ul>
        </div>
    )
}

export default VideoList;