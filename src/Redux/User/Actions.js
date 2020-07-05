import {UserActions} from './User.types';
export const setCurrentUser = user => ({
    type: UserActions.SET_CURRENT_USER,
    payload: user
});