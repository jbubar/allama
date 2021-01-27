import { combineReducers } from 'redux';
import entities from './entities/entities_reducer';
import session from "./session/session_reducer";
import errors from "./errors/errors_reducer";
import searchData from "./search_reducer"

export default combineReducers({
    entities,
    searchData,
    session,
    errors
})