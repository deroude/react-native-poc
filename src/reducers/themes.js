import * as Actions from '../actions';

export const themes = (state = [], action) => {
    switch (action.type) {
        case Actions.THEME_COLLECTION:
            return action.coll;
        default:
            return state;
    }
}