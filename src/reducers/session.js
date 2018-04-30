import * as Actions from '../actions';

export const initSession = (state = false, action) => {
    switch (action.type) {
        case Actions.SESSION_INITIALIZE:
            return true;
        default:
            return state;
    }
}