import React from 'react'
import DogGallery from './DogGallery'

function DogShow() {
    return (
        <section className="dog-show">
            <button className="previous-button">Prev</button>
            <DogGallery />
            <button className="next-button">Next</button>            
        </section>
    );
}

export default DogShow;