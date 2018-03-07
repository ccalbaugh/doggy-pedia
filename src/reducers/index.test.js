import { expect } from 'code'
import * as types from '../actions/actionTypes'
import dogReducer from './index'

const mockBreeds = [ "affenpinscher", "african", "airedale", "akita" ];
const mockImages = [
    "https://dog.ceo/api/img/akita/512px-Ainu-Dog.jpg",
    "https://dog.ceo/api/img/akita/Akita_Dog.jpg",
    "https://dog.ceo/api/img/akita/Akita_Inu_dog.jpg"
];

describe('Given `dogReducer`', () => {

    it('should return the initial state when none is given', () => {

        const expectedState = {};

        expect(dogReducer(undefined, { type: 'NO_MATCH'})).to.equal(expectedState);

    });

    it('should handle `FETCH_ALL_BREEDS`', () => {

        const expectedState = { allBreeds: mockBreeds };

        expect(dogReducer(undefined, { type: types.FETCH_ALL_BREEDS, breeds: mockBreeds })).to.equal(expectedState);

    });

    it('should handle `SEARCH_BREED`', () => {

        const expectedState = { allBreeds: mockBreeds, currentBreed: [ 'akita' ] };

        expect(dogReducer({ allBreeds: mockBreeds }, { type: types.SEARCH_BREED, breed: 'akita' })).to.equal(expectedState);
        
    })

    it('should handle `FETCH_CURRENT_BREED_IMAGES', () => {

        const initialState = { allBreeds: mockBreeds, currentBreed: [ 'akita' ] };

        const expectedState = { allBreeds: mockBreeds, currentBreed: [ 'akita' ], currentBreedImages: mockImages };        

        expect(dogReducer(initialState, { type: types.FETCH_CURRENT_BREED_IMAGES, images: mockImages })).to.equal(expectedState);

    })

});
