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
        .then(data => data.message)
        .then(breeds => dispatch({ type: types.FETCH_ALL_BREEDS, breeds }))
    };
}

export function fetchCurrentBreedImages(breed) {
    return dispatch => {
        return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res => res.json())
        .then(data => data.message)
        .then(images => dispatch({ type: types.FETCH_CURRENT_BREED_IMAGES, images }))
    };
}