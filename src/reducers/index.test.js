import { expect } from 'code'
import * as types from '../actions/actionTypes'
import dogReducer from './index'

describe('Given `dogReducer`', () => {

    it('should return the initial state when none is given', () => {

        const expectedState = {};

        expect(dogReducer(undefined, { type: 'NO_MATCH'})).to.equal(expectedState);

    });

})