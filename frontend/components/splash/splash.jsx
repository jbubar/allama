import React from 'react';
import { withRouter } from 'react-router-dom';
import SplashNav from './splash_nav';

const Splash  = () => {
    return (
        <div>
            <SplashNav/>
        </div>
    )
}

export default withRouter(Splash);