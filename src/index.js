import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import { YT_API_KEY } from './keys/ytkey';
import YTSearch from 'youtube-api-search';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
        }

        // execute default video search
        this.videoSearch('oklahoma football');
    }

    // run youTube search api and set state
    videoSearch(term) {
        YTSearch({key: YT_API_KEY, term: term }, (videos) => {
            this.setState( {videos} );
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermEnter={term => this.videoSearch(term)}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
