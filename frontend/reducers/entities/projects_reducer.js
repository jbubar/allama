import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../../actions/session_actions";

import { RECEIVE_CURRENT_TEAM } from "../../actions/team_actions";

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, newState, action.payload.projects);
    case RECEIVE_CURRENT_TEAM:
      return Object.assign({}, newState, action.payload.projects);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};
export default projectsReducer;