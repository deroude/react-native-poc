import { combineReducers } from 'redux';
import {themes} from "./themes";
import {loading,loadError} from "./load";
import {initSession} from "./session";

export default combineReducers({
    themes,
    loading,
    initSession,
    loadError
})