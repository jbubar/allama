import {  RECEIVE_CURRENT_PROJECT} from "../../actions/project_actions";
import {  LOGOUT_CURRENT_USER } from "../../actions/session_actions";

const sectionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_PROJECT:
      return Object.assign({}, newState, action.payload.sections);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};
export default sectionsReducer;
