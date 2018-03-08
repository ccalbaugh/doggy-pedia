import React from 'react';
import PropTypes from 'prop-types';

function DogGallery(props) {
    return (
        <ul className="dog-gallery">
            {
                !props.breedImages ? (
                    <span className='no-breed-images-text'>No Images Found</span>
                ) : (
                    props.breedImages.map(image => {
                        return (
                            <li className="dog-gallery-item" 
                                key={`${image}-key`}
                            >
                                <img src={image} 
                                    alt="A Dog"
                                    className="breed-image"
                                />
                            </li>
                        );
                    })
                )   
            }
        </ul>
    );
}

DogGallery.propTypes = {
    breedImages: PropTypes.array
}

export default DogGallery;