import * as types from './actionTypes'

export function searchBreed(breed) {
    return {
        type: types.SEARCH_BREED,
        breed
    };
}