import React from 'react';

const VideoDetail = ({ video }) => {
    // diplay message if video not loaded yet
    if(!video) return <div>Loading...</div>;

    // provide video link for selected video 
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;

    return (
        <div className="col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;