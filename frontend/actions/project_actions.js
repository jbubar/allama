import * as APIProjectsUtil from "../util/projects_api_util";

export const RECEIVE_CURRENT_PROJECT = "RECEIVE_CURRENT_PROJECT";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";

const receiveCurrentProject = payload => ({
  type: RECEIVE_CURRENT_PROJECT,
  payload,
});

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project,
});

const deleteProject = projectId => ({
  type: DELETE_PROJECT,
  projectId
})

const receiveErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const getProject = projectId => dispatch => {
  return APIProjectsUtil.getProject(projectId).then((payload) =>
    dispatch(receiveCurrentProject(payload))
  );
};

export const createProject = (project) => (dispatch) => {
  return APIProjectsUtil.createProject(project).then(
    (project) => dispatch(receiveProject(project)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateProject = (project) => (dispatch) => {
  return APIProjectsUtil.updateProject(project).then(
    (project) => dispatch(receiveProject(project)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const removeProject = (projectId) => (dispatch) => {
  return APIProjectsUtil.deleteProject(projectId).then(() =>
    dispatch(deleteProject(projectId))
  );
};
