import React from 'react';
import MainContainer from './main/main_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute, HomeRoute } from '../util/routes_util';
import SplashPage from './splash/splash';
import ErrorPage from './error-page';
import { Route, Switch } from 'react-router-dom';
import NewProjectPage from './projects/new_project_page';

const App = () => {
    return(
        <div className="app">
            <Switch>
                <AuthRoute exact path="/welcome" component={SplashPage} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <HomeRoute exact path="/" />
                <ProtectedRoute path="/home" component={MainContainer} />
                <ProtectedRoute exact path="/projects/new" component={NewProjectPage} />
                <ProtectedRoute path="/projects/:projectId" component={MainContainer} />
                <ProtectedRoute path="/tasks/:userId" component={MainContainer} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    )
}

export default App;