import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllBreeds, fetchCurrentBreedImages } from '../actions';
import DogGallery from './DogGallery';

const GALLERY_SIZE = 3;

function updateCurrentIndex() {
    const { currentIndex, currentBreedImages } = this.state;

    currentIndex + GALLERY_SIZE <= currentBreedImages.length - 1 ?
        this.setState({ currentIndex: currentIndex + GALLERY_SIZE }) :
        this.setState({ currentIndex: 0 });
}

export class DogShow extends Component {

    state = {
        currentBreedImages: [],
        currentIndex: 0,
        currentInterval: undefined
    };

    componentDidMount() {
        this.props.fetchAllBreeds();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentBreed !== this.props.currentBreed) {
            clearInterval(this.state.currentInterval);
            this.setState({ currentBreedImages: [], currentIndex: 0, currentInterval: undefined });
        }
        
        if (nextProps.currentBreedImages !== this.props.currentBreedImages) {
            const currentInterval = setInterval(updateCurrentIndex.bind(this), 10000);
            this.setState({ currentBreedImages: nextProps.currentBreedImages, currentInterval });
        }
    }

    componentDidUpdate(prevProps) {
        const { currentBreed, fetchCurrentBreedImages } = this.props;

        prevProps.currentBreed !== currentBreed && 
        currentBreed.length === 1 &&
        fetchCurrentBreedImages(currentBreed);
    }

    render() {
        const { currentBreed } = this.props;
        const { currentBreedImages, currentIndex } = this.state;
        const prevDisabled = currentIndex === 0 || currentBreedImages.length <= GALLERY_SIZE;
        const nextDisabled = currentIndex >= (currentBreedImages.length - GALLERY_SIZE);
        const imagesToPass = currentIndex + GALLERY_SIZE <= currentBreedImages.length - 1 ? 
                                currentBreedImages.slice(currentIndex, GALLERY_SIZE) :
                                currentBreedImages.slice(currentIndex);
        return (
            <section className="dog-show">
                {
                    (!currentBreed || currentBreed.length === 0) ? (
                        <span className="no-breeds-text">Search For a Breed</span>
                    ) : (
                        currentBreed.length === 1 ? (
                            <div className='dog-gallery-container'>
                                <button className="previous-button" disabled={prevDisabled}>Prev</button>
                                <DogGallery breedImages={imagesToPass} />
                                <button className="next-button" disabled={nextDisabled}>Next</button>   
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