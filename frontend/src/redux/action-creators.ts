'use strict';

/**
 * List of thunks to store redux logic or make async actions
 */

import * as types from "@redux/action-types";


export function getUserSuccess(data) {
    return{
        type: types.GET_USER_SUCCESS,
        data
    }
}

export function getCatalogSuccess(data) {
    return{
        type: types.GET_CATALOG_SUCCESS,
        data
    }
}



export function getAllNotes(data) {
    return{
        type: types.GET_ALL_NOTES_SUCCESS,
        data
    }
}


export function getOneNote(data) {
    return{
        type: types.GET_ONE_NOTE_SUCCESS,
        data
    }
}