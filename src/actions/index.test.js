import 'isomorphic-fetch';
import { expect } from 'code';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from './index';
import * as types from './actionTypes';

const createMockStore = configureMockStore([ thunk ]);
const store = createMockStore({ allBreeds: {} });
const mockResponse = { message: [ "affenpinscher", "african", "airedale", "akita" ] };
const json = sinon.stub().returns(mockResponse);
const fetchStub = sinon.stub(global, 'fetch').resolves({ json });


it('creates an action to search for a breed', () => {

    const mockBreed = 'boxer';

    const expectedAction = { type: types.SEARCH_BREED, breed: mockBreed };

    expect(actions.searchBreed(mockBreed)).to.equal(expectedAction);

});

it('creates an async action to fetch all breeds', () => {

    const expectedActionS = [{ type: types.FETCH_ALL_BREEDS, breeds: mockResponse }];

    return store.dispatch(actions.fetchAllBreeds())

    .then(() => {

        expect(store.getActions()).to.equal(expectedActions);

    });

});