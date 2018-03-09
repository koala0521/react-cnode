// 应用的 reducer
import { combineReducers } from 'redux';

import indexReducer from './indexReducer';
import userReducer from './userReducer';
import detailsReducer from './detailsReducer';

let reducer = combineReducers({
    indexReducer,
    userReducer,
    detailsReducer

});

export default reducer;

