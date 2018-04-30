import * as Contentful from '../services/contentful.service';

export const THEME_SELECT = "THEME_SELECT";
export const THEME_COLLECTION = "THEME_COLLECTION";
export const LOADING = "LOADING";
export const LOAD_ERROR = "LOAD_ERROR";
export const SESSION_INITIALIZE = "SESSION_INITIALIZE";

export const themeSelect = id => ({ type: THEME_SELECT, id });

export const themeCollection = coll => ({ type: THEME_COLLECTION, coll });

export const loading = isLoading => ({ type: LOADING, isLoading });

export const loadError = isError => ({ type: LOAD_ERROR, isError });

export const themeCollectionLoad = () => (dispatch) => {
    dispatch(loading(true));
    Contentful.getAllThemes.then((coll) => {
        dispatch(themeCollection(coll));
        dispatch(loadError(false));
        dispatch(loading(false));
    }).catch(() => {
        dispatch(loading(false));
        dispatch(loadError(true));
    });
}