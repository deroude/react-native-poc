import * as Actions from '../actions';

export const loading = (state = true, action) => {
    switch (action.type) {
        case Actions.LOADING:
            return action.isLoading;
        default:
            return true;
    }
}

export const loadError = (state = false, action) => {
    switch (action.type) {
        case Actions.LOAD_ERROR:
            return action.isError;
        default:
            return state;
    }
}