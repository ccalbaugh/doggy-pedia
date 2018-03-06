import { expect } from 'code'
import * as types from '../actions/actionTypes'
import dogReducer from './index'

const mockBreeds = [ "affenpinscher", "african", "airedale", "akita" ];

describe('Given `dogReducer`', () => {

    it('should return the initial state when none is given', () => {

        const expectedState = {};

        expect(dogReducer(undefined, { type: 'NO_MATCH'})).to.equal(expectedState);

    });

    it('should handle `FETCH_ALL_BREEDS`', () => {

        const expectedState = { allBreeds: mockBreeds };

        expect(dogReducer(undefined, { type: types.FETCH_ALL_BREEDS, breeds: mockBreeds })).to.equal(expectedState);

    });

});