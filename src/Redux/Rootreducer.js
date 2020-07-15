import { combineReducers } from 'redux';

import userReducer from './User/User';
import cartReducer from './Cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});
