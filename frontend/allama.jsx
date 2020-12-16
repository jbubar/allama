import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store';


//TESTING
import * as APISessionUtils from './util/session_api_util';
import * as action from './actions/session_actions';
//END TESTING

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = {};
    if (window.currentUser){
        preloadedState = {
            session: { currentUser: window.currentUser},
            entities: { team: window.team }
        }
    }

    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store}/>, document.getElementById('root'))
    
    //TESTING
    window.APISessionUtils = APISessionUtils;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.action = action
    //END TESTING
})

