import * as APIProjectsUtil from "../util/projects_api_util";

export const RECEIVE_CURRENT_PROJECT = "RECEIVE_CURRENT_PROJECT";

const receiveCurrentProject = payload => ({
  type: RECEIVE_CURRENT_PROJECT,
  payload,
});

export const getProject = projectId => dispatch => {
  return APIProjectsUtil.getProject(projectId).then((payload) =>
    dispatch(receiveCurrentProject(payload))
  );
};
