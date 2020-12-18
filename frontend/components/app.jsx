import React from 'react';
import MainContainer from './main/main_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import SplashPage from './splash/splash';
import ErrorPage from './error-page';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return(
        <div className="app">
            <Switch>
                <AuthRoute exact path="/welcome" component={SplashPage} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute path="/0/home" component={MainContainer} />
                <ProtectedRoute path="/0/projects/:projectId" component={MainContainer} />
                <ProtectedRoute path="/0/tasks" component={MainContainer} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    )
}

export default App;