import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
    hidden: true,
    routename: null,
    favorites: [], 
    cart: []
};

const cartReducer = (state = INITIAL_STATE , action)=> {
    switch(action.type){
        case CartActionTypes.TOGGLE_HIDDEN_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.TOGGLE_REDIRECT_HANDLER:
            return{
                ...state,
                routename: action.payload
            }
        case CartActionTypes.ADD_FAVORITES:
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case CartActionTypes.REMOVE_FAVORITES:
            let array = state.favorites.filter(item => item.id !== action.payload)
            return{
                ...state,
                favorites : [array]
            }
        case CartActionTypes.ADD_CART:
            return{
                ...state,
                cart: [...state.cart , action.payload]
            }
        case CartActionTypes.REMOVE_CART:
            let arr = state.cart.filter(item => item.id !== action.payload)
            return{
                ...state,
                cart: [arr]
            }
        
            default:
                return state;
    }
}

export default cartReducer;