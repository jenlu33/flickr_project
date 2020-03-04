import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
})

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
  errors: []
})


//creating a new session
export const log_in = user => dispatch => (SessionAPIUtil.login(user)
  .then(user => dispatch(receiveCurrentUser(user)),
        (error) => {
          // debugger
          dispatch(receiveErrors(error.responseJSON))
}))

//deleting a session
export const log_out =() => dispatch => (SessionAPIUtil.logout()
  .then(() => dispatch(logoutCurrentUser())))


//creating a new user
export const sign_up = user => dispatch => {
  // debugger
  return (
    SessionAPIUtil.signup(user)
  .then((user) => dispatch(receiveCurrentUser(user)),
        (error) => dispatch(receiveErrors(error.responseJSON)))
  )
}



