import React from 'react';
import { connect } from 'react-redux';

import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        exact={exact}
        path={path}
        render={props => (
            loggedIn ? (
                <Redirect to='/home'/>
            ) : (
                <Component {...props}/>
            )
        )}
    />
)
const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        exact={exact}
        path={path}
        render={props => (
            loggedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect to='/welcome'/>
            )
        )}
    />
)
const Home = ({ loggedIn }) => (
  <Route
    render={() =>
      loggedIn ? <Redirect to="/home" /> : <Redirect to="/welcome" />
    }
  />
);

const mapStateToProps = state => (
    { loggedIn: Boolean(state.session.currentUserId) }
)
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const HomeRoute = withRouter(connect(mapStateToProps)(Home));