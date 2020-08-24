import {CartActionTypes} from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_HIDDEN_CART
})
export const toggleRedirectHandler = routename => ({
    type: CartActionTypes.TOGGLE_REDIRECT_HANDLER,
    payload:routename
})
export const addFavorites = item => ({
    type: CartActionTypes.ADD_FAVORITES,
    payload: item
})
export const removeFavorites = id => ({
    type: CartActionTypes.REMOVE_FAVORITES,
    payload: id
})
export const addCart = item => ({
    type: CartActionTypes.ADD_CART,
    payload: item
})
export const removeCart = id => ({
    type: CartActionTypes.REMOVE_CART,
    payload: id
})