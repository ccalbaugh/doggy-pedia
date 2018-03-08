import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllBreeds, fetchCurrentBreedImages } from '../actions';
import DogGallery from './DogGallery';


export class DogShow extends Component {

    state = {
        currentBreedImages: [],
        currentIndex: 0
    };

    componentDidMount() {
        this.props.fetchAllBreeds();
    }

    componentWillReceiveProps(nextProps) {
        nextProps.currentBreed !== this.props.currentBreed && 
        this.setState({ currentBreedImages: [] });

        nextProps.currentBreedImages !== this.props.currentBreedImages &&
        this.setState({ currentBreedImages: nextProps.currentBreedImages });
    }

    componentDidUpdate(prevProps) {
        const { currentBreed, fetchCurrentBreedImages } = this.props;
        prevProps.currentBreed !== currentBreed && 
        currentBreed.length === 1 &&
        fetchCurrentBreedImages(currentBreed);
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
                                <DogGallery breedImages={this.state.currentBreedImages} />
                                <button className="next-button">Next</button>   
                            </div>
                        ) : (
                            <ul className="breed-choice-list">
                                {
                                    currentBreed.map(breed => {
                                        return <li className="breed-choice-list-item" key={`${breed}-key`}>{breed}</li>;
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
    currentBreedImages: PropTypes.array,
    fetchAllBreeds: PropTypes.func
};

function mapStateToProps(state) {
    return {
        currentBreed: state.currentBreed,
        currentBreedImages: state.currentBreedImages
    };
}

export default connect(mapStateToProps, { fetchAllBreeds, fetchCurrentBreedImages })(DogShow);