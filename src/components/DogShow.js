import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchAllBreeds } from '../actions';
import DogGallery from './DogGallery'

export class DogShow extends Component {

    componentDidMount() {
        this.props.fetchAllBreeds();
    }

    render() {
        console.log('Breeds List: ', this.props.breedsList);
        return (
            <section className="dog-show">
                <button className="previous-button">Prev</button>
                <DogGallery />
                <button className="next-button">Next</button>            
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        breedsList: state.allBreeds
    };
}

export default connect(mapStateToProps, { fetchAllBreeds })(DogShow);