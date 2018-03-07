import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllBreeds } from '../actions';
import DogGallery from './DogGallery';

export class DogShow extends Component {

    componentDidMount() {
        this.props.fetchAllBreeds();
    }

    render() {
        const { currentBreed } = this.props;
        return (
            <section className="dog-show">
                {
                    (!currentBreed || currentBreed.length === 0) ? (
                        <span className="no-breeds-text">Search For a Breed</span>
                    ) : (
                        currentBreed.length === 1 ? (
                            <div className='dog-gallery-container'>
                                <button className="previous-button">Prev</button>
                                <DogGallery currentBreed={currentBreed} />
                                <button className="next-button">Next</button>   
                            </div>
                        ) : (
                            <ul className="breed-choice-list">
                                {
                                    currentBreed.map((breed, i) => {
                                        return <li className="breed-choice-list-item" key={i}>{breed}</li>;
                                    })
                                }
                            </ul>
                        )
                    )
                }     
            </section>
        );
    }
}

DogShow.propTypes = {
    currentBreed: PropTypes.array,
    fetchAllBreeds: PropTypes.func
};

function mapStateToProps(state) {
    return {
        currentBreed: state.currentBreed
    };
}

export default connect(mapStateToProps, { fetchAllBreeds })(DogShow);