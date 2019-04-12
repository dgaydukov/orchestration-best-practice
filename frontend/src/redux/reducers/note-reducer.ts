'use strict';

/**
 * User Reducer for getting user profile data
 */


import * as types from '@redux/action-types';

const initialState = {
    notes: [],
    note: {},
};

export default (state = initialState, action)=>{
    switch(action.type) {
        case types.GET_ALL_NOTES_SUCCESS:
            return { ...state, notes: action.data};
        case types.GET_ONE_NOTE_SUCCESS:
            return { ...state, note: action.data};
    }
    return state;
}