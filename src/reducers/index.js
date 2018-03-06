import * as types from '../actions/actionTypes'

function fetchAllBreeds(state, action) {
    return {
        ...state,
        allBreeds: action.breeds
    };
}

export default function(state = {}, action) {
    const actionsHandler = {
        [types.FETCH_ALL_BREEDS]: fetchAllBreeds
    };

    const reducer = actionsHandler[action.type];

    return reducer ? reducer(state, action) : state;
}