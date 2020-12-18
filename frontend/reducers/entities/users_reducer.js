import { 
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from "../../actions/session_actions";
import { RECEIVE_CURRENT_TEAM } from "../../actions/team_actions";
import { RECEIVE_CURRENT_PROJECT } from "../../actions/project_actions";


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState)
    switch (action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, newState, action.payload.members);
        case RECEIVE_CURRENT_TEAM:
            return Object.assign({}, newState, action.payload.members);
        case RECEIVE_CURRENT_PROJECT:
            return Object.assign({}, newState, action.payload.members);
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return oldState;
    }
}
export default usersReducer;