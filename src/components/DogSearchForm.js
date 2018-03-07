import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBreed } from '../actions';

function handleSubmit(e) {
    e.preventDefault();
    this.props.searchBreed(this.state.currentInput);
    this.setState({ currentInput: '' });
}

export class DogSearchForm extends Component {

    state = {
        currentInput: ''
    };

    render() {
        return (
            <form 
                className="dog-search-form"
                onSubmit={handleSubmit.bind(this)}    
            >
                <input 
                    type="text" 
                    className="dog-search-input"
                    onChange={ (e) => this.setState({ currentInput: e.target.value }) }
                    value={this.state.currentInput} 
                />
                <button 
                    type="submit" 
                    className="dog-search-button"
                >
                    Search
                </button>
            </form>
        );
    }
}

export default connect(null, { searchBreed })(DogSearchForm);