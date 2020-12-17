import { combineReducers } from 'redux';
import users from './users_reducer';
import team from './teams_reducer';

export default combineReducers({
    team,
    users
})