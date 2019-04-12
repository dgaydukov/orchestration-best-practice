'use strict';

/**
 *  Redux reducers combiner
 */

import { combineReducers } from 'redux';
import userReducer from '@redux/reducers/user-reducer';
import catalogReducer from '@redux/reducers/catalog-reducer';
import noteReducer from '@redux/reducers/note-reducer';

export default combineReducers({
    userState: userReducer,
    catalogState: catalogReducer,
    noteState: noteReducer,
});