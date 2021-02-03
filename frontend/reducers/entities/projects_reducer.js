import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../../actions/session_actions";
import { RECEIVE_CURRENT_TEAM } from "../../actions/team_actions";
import { RECEIVE_PROJECT, DELETE_PROJECT } from "../../actions/project_actions";

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
    case RECEIVE_PROJECT:
      return { ...newState, [action.project.id]: action.project };
    case DELETE_PROJECT:
      delete newState[action.projectId];
      return newState;
    default:
      return oldState;
  }
};
export default projectsReducer;
