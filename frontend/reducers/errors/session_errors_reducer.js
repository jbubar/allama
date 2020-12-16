import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  REMOVE_ERRORS
} from "../../actions/session_actions";

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors || [];
    case RECEIVE_CURRENT_USER:
      return [];
    case REMOVE_ERRORS && oldState.length > 0:
      return [];
    default:
      return oldState;
  }
};
export default sessionErrorsReducer;
