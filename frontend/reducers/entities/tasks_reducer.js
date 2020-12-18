import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../../actions/session_actions";

import { RECEIVE_CURRENT_TEAM } from "../../actions/team_actions";
import { RECEIVE_CURRENT_PROJECT } from "../../actions/project_actions";
import { RECEIVE_TASK, DELETE_TASK } from "../../actions/task_actions";

const tasksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, newState, action.payload.tasks);
    case RECEIVE_CURRENT_TEAM:
      return Object.assign({}, newState, action.payload.tasks);
    case RECEIVE_CURRENT_PROJECT:
      return Object.assign({}, newState, action.payload.tasks);
    case RECEIVE_TASK:
      return {...newState, [action.task.id]: action.task};
    case DELETE_TASK:
      delete newState[action.taskId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  }
};
export default tasksReducer;
