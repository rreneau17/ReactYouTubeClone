import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: 'Enter a search' };
    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({ term });
        console.log(term);
    }
}

export default SearchBar;