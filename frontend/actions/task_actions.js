import * as APITaskUtils from "../util/tasks_api_util";

export const RECEIVE_TASK = "RECEIVE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";

const receiveTask = (task) => ({
  type: RECEIVE_TASK,
  task
});

const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  taskId
});

const receiveErrors = (errors) => ({
  type: RECEIVE_TASK_ERRORS,
  errors
});


//THUNK action creators

export const createTask = (task) => (dispatch) => {
  return APITaskUtils.createTask(task).then(
    (task) => dispatch(receiveTask(task)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateTask = (task) => (dispatch) => {
  return APITaskUtils.updateTask(task).then(
    (task) => dispatch(receiveTask(task)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const removeTask = (taskId) => (dispatch) => {
  return APITaskUtils.deleteTask(taskId).then(() => dispatch(deleteTask(taskId)));
};
