import * as types from './actionTypes'

export function searchBreed(breed) {
    return {
        type: types.SEARCH_BREED,
        breed
    };
}

export function fetchAllBreeds() {
    return dispatch => {
        return fetch('https://dog.ceo/api/breeds/list')
        .then(res => res.json())
        .then(breeds => dispatch({ type: types.FETCH_ALL_BREEDS, breeds }))
    };
}