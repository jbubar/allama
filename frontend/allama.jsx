import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store';


//TESTING
import * as APISessionUtils from './util/session_api_util';
import { searchUtil } from './util/search_api_util';
import { searchDB } from './actions/search_actions';
import * as action from './actions/session_actions';
import { openProjectModal, closeProjectModal } from "./actions/ui_actions.js";

//END TESTING

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = {};
    if (window.currentUser){
        preloadedState = {
            session: { currentUserId: window.currentUser.id}
        }
    }

    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
    
    //TESTING
    window.APISessionUtils = APISessionUtils;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.store = store;
    window.searchUtil = searchUtil;
    window.search = searchDB;
    window.openProjectModal = openProjectModal;
    window.closeProjectModal = closeProjectModal;
    //END TESTING
})

