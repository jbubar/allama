import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const _initialState = {};
const configureStore = (preloadedState = _initialState) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
)
export default configureStore;