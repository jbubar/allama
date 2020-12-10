import React from 'react';
import HomeContainer from './home/home_container';
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
                <ProtectedRoute exact path="/home" component={HomeContainer} />
                <AuthRoute exact path="/" component={SplashPage} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    )
}

export default App;