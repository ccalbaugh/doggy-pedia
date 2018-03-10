import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchBreed } from '../actions';
import './DogSearchForm.css';

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
                <div className="input-container">
                    <input 
                        type="text" 
                        className="dog-search-input"
                        id="dog-input"
                        onChange={ (e) => this.setState({ currentInput: e.target.value }) }
                        value={this.state.currentInput} 
                    />
                    <label htmlFor="dog-input">Search Breeds</label>
                    <span className='focus-border'></span>
                </div>
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

DogSearchForm.propTypes = {
    searchBreed: PropTypes.func
}

export default connect(null, { searchBreed })(DogSearchForm);