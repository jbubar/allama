import * as APISessionUtils from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveCurrentUser = payload => ({
    type: RECEIVE_CURRENT_USER,
    payload
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: REMOVE_ERRORS
})

//THUNK action creators

export const signup = newUser => dispatch => {
    return APISessionUtils.signup(newUser)
        .then(payload => dispatch(receiveCurrentUser(payload)),
            err => dispatch(receiveErrors(err.responseJSON)));
}

export const login = userCredentials => dispatch => {
    return APISessionUtils.login(userCredentials)
        .then(payload => dispatch(receiveCurrentUser(payload)),
            err => dispatch(receiveErrors(err.responseJSON)));
}

export const logout = () => dispatch => {
    return APISessionUtils.logout()
        .then(() => dispatch(logoutCurrentUser()))
}