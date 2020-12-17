import { combineReducers } from 'redux';
import users from './users_reducer';
import team from './teams_reducer';
import projects from './projects_reducer';
import tasks from './tasks_reducer';
import sections from './sections_reducer';

export default combineReducers({
    team,
    users,
    projects,
    sections,
    tasks
})