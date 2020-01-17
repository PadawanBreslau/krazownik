import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function LogOut(endpoint) {
  return {
    type: LOGOUT_REQUEST,
    endpoint,
  };
}
export function LogOutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
export function LogOutError(error) {
  return {
    type: LOGOUT_ERROR,
    error,
  };
}
export function AuthUser(endpoint, payload, successCallback, isAdmin = false) {
  return {
    type: LOGIN_REQUEST,
    endpoint,
    payload: {
      data: {
        attributes: payload,
      },
    },
    successCallback,
    isAdmin,
  };
}
export function AuthUserSuccess(data, isAdmin) {
  return {
    type: LOGIN_SUCCESS,
    data,
    isAdmin,
  };
}
export function AuthUserError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
