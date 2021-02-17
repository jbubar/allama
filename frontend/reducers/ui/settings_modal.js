import {
  OPEN_SETTINGS_MODAL,
  CLOSE_SETTINGS_MODAL,
} from "../../actions/ui_actions";


const settingsModal = (state = false, action) => {
  switch (action.type) {
    case OPEN_SETTINGS_MODAL:
      return true
    case CLOSE_SETTINGS_MODAL:
      return false
    default:
      return state;
  }
};

export default settingsModal;
