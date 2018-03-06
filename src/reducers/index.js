import * as types from '../actions/actionTypes'

function fetchAllBreeds(state, action) {
    return {
        ...state,
        allBreeds: action.breeds
    };
}

function searchBreed(state, action) {
    const matchingBreed = new RegExp(action.breed, 'gi');
    return {
        ...state,
        currentBreed: state.allBreeds.filter(breed => breed.match(matchingBreed))
    };
}

export default function(state = {}, action) {
    const actionsHandler = {
        [types.FETCH_ALL_BREEDS]: fetchAllBreeds,
        [types.SEARCH_BREED]: searchBreed
    };

    const reducer = actionsHandler[action.type];

    return reducer ? reducer(state, action) : state;
}