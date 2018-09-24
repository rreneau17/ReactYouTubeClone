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
                    defaultValue={this.state.term}
                    onKeyPress={event => this.onInputChange(event.target.value, event.key)}
                    // onChange={(event) => this.onInputChange(event.target)} 
                />
            </div>
        )
    }

    // 
    onInputChange(term, keyPress) {
        if (keyPress === 'Enter') {
            this.props.onSearchTermEnter(term);
            this.setState({ term });
        } 
    }
}

export default SearchBar;