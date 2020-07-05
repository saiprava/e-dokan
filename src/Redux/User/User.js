import {UserActions} from './User.types';

const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
         case UserActions.SET_CURRENT_USER:
             return {
                 ...state,
                 currentUser: action.payload
             };
             break;
             default:
                 return state;
    }
};

export default userReducer;
