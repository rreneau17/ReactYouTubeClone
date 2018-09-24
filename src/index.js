import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import { YT_API_KEY } from './keys/ytkey';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }

        // execute default video search
        this.videoSearch('oklahoma football');
    }

    // run youTube search api and set state
    videoSearch(term) {
        YTSearch({key: YT_API_KEY, term: term }, (videos) => {
            this.setState( {
                videos,
                selectedVideo: videos[0]
            });
            console.log(videos);
        });
    }

    // sets the state of video selected for detail view 
    chooseVideo(selected) {
        this.setState({
            selectedVideo: selected
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermEnter={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    videos={this.state.videos}
                    onSelectVideo={selectedVideo => this.chooseVideo(selectedVideo)}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
