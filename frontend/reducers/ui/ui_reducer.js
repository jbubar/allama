import { combineReducers } from "redux";
import projectModal from "./project_edit_modal"
import settingsModal from "./settings_modal"

export default combineReducers({
    projectModal,
    settingsModal
});
