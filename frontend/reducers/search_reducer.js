import { RECEIVE_SEARCH_DATA, CLEAR_SEARCH_DATA } from '../actions/search_actions';

const searchReducer = (oldState = {}, action) => {
    switch(action.type){
        case RECEIVE_SEARCH_DATA:
            return action.searchData;
        case CLEAR_SEARCH_DATA:
            return {};
        default:
            return oldState;
    }
}

export default searchReducer;