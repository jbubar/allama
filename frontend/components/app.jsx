import React from 'react';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';
import SplashPage from './splash/splash';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return(
        <div className="app">
            <Switch>
                <Route exact path="/" component={SplashPage} />
                <ProtectedRoute exact path="/home" component={HomeContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
        </div>
    )
}

export default App;