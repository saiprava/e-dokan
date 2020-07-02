import { combineReducers } from 'redux';

import userReducer from './User/User';

export default combineReducers({
    user: userReducer
});
