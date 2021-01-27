import { searchUtil } from '../util/search_api_util';

export const RECEIVE_SEARCH_DATA = "RECEIVE_SEARCH_DATA";
export const CLEAR_SEARCH_DATA = "CLEAR_SEARCH_DATA";

const receiveSearch = (searchData) => ({
    type: RECEIVE_SEARCH_DATA,
    searchData
});

export const clearSearch = () => ({
    type: CLEAR_SEARCH_DATA
});

export const searchDB = (query, teamId) => (dispatch) => {
  return searchUtil(query, teamId).then(searchData => {
        dispatch(receiveSearch(searchData))
    })
};
