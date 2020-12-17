import * as APITeamsUtil from "../util/teams_api_util";

export const RECEIVE_CURRENT_TEAM = "RECEIVE_CURRENT_TEAM";


const receiveCurrentTeam = (payload) => ({
  type: RECEIVE_CURRENT_TEAM,
  payload
});


export const getTeam = (teamId) => (dispatch) => {
  return APITeamsUtil.getTeam(teamId).then(
    (payload) => dispatch(receiveCurrentTeam(payload))
  );
};
