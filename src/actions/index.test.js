import { expect } from 'code'
import * as actions from './index'
import * as types from './actionTypes'

it('creates an action to fetch all breeds', () => {

    const mockBreed = 'boxer';

    const expectedAction = { type: types.SEARCH_BREED, breed: mockBreed };

    expect(actions.searchBreed(mockBreed)).to.equal(expectedAction);

});