import React, { Component } from 'react'

class DogSearchForm extends Component {

    state = {
        currentInput: ''
    };

    render() {
        return (
            <form className="dog-search-form">
                <input type="text" className="dog-search-input" />
                <button type="submit" className="dog-search-button">Search</button>
            </form>
        );
    }
}

export default DogSearchForm;