import 'isomorphic-fetch';
import { expect } from 'code';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actions from './index';
import * as types from './actionTypes';

let mockResponse,
    expectedMessage,
    sandbox,
    json,
    fetchStub;

const createMockStore = configureMockStore([ thunk ]);
const store = createMockStore({}); 

beforeEach(() => {
    sandbox = sinon.createSandbox();
    mockResponse = { message: expectedMessage };
    json = sandbox.stub().returns(mockResponse);
    fetchStub = sandbox.stub(global, 'fetch').resolves({ json });
})

afterEach(() => {
    sandbox.restore();
    store.clearActions();
})

it('creates an action to search for a breed', () => {

    const mockBreed = 'boxer';

    const expectedAction = { type: types.SEARCH_BREED, breed: mockBreed };

    expect(actions.searchBreed(mockBreed)).to.equal(expectedAction);

});

it('creates an async action to fetch all breeds', () => {

    const expectedMessage = [ "affenpinscher", "african", "airedale", "akita" ];

    const expectedActions = [{ type: types.FETCH_ALL_BREEDS, breeds: mockResponse.message }];

    return store.dispatch(actions.fetchAllBreeds())

    .then(() => {

        expect(store.getActions()).to.equal(expectedActions);

    });

});

it('creates an async action to fetch all `currentBreed` images', () => {

    const expectedMessage = [ 
        "https://dog.ceo/api/img/akita/512px-Ainu-Dog.jpg",
        "https://dog.ceo/api/img/akita/Akita_Dog.jpg",
        "https://dog.ceo/api/img/akita/Akita_Inu_dog.jpg" 
    ];  

    const expectedActions = [{ type: types.FETCH_CURRENT_BREED_IMAGES, images: mockResponse.message }];

    const mockBreed = 'akita';

    return store.dispatch(actions.fetchCurrentBreedImages(mockBreed))

    .then(() => {

        expect(store.getActions()).to.equal(expectedActions);

    });

})
