import { OPEN_PROJECT_MODAL, CLOSE_PROJECT_MODAL } from "../../actions/ui_actions"

const _initialState = {
    open: false,
    projectId: null
}
const projectModal = (state = _initialState, action) => {
    switch (action.type){
        case OPEN_PROJECT_MODAL:
            return {
              open: true,
              projectId: action.projectId,
            };
        case CLOSE_PROJECT_MODAL:
            return {
              open: false,
              projectId: null,
            };
        default:
            return state;
    }
}

export default projectModal;