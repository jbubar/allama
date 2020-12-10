import React from 'react';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/routes_util';

const App = () => {
    return(
        <div>
            <header>
                <h1>user home</h1>
                <HomeContainer />
            </header>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
    )
}

export default App;