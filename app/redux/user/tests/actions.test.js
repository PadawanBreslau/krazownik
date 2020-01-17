import {
  LogOut,
  LogOutSuccess,
  LogOutError,
  AuthUser,
  AuthUserSuccess,
  AuthUserError,
} from '../actions';

import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../constants';

describe('User actions', () => {
  it('has a type of all actions', () => {
    expect(LogOut('/endpoint')).toEqual({
      type: LOGOUT_REQUEST,
      endpoint: '/endpoint',
    });
    expect(LogOutSuccess()).toEqual({
      type: LOGOUT_SUCCESS,
    });
    expect(LogOutError({ some: 'error' })).toEqual({
      type: LOGOUT_ERROR,
      error: { some: 'error' },
    });
    const exampleCallback = '/somewhere';
    const exampleCredentials = {};
    expect(AuthUser('/endpoint', exampleCredentials, exampleCallback)).toEqual({
      type: LOGIN_REQUEST,
      endpoint: '/endpoint',
      payload: {
        data: {
          attributes: exampleCredentials,
        },
      },
      isAdmin: false,
      successCallback: exampleCallback,
    });
    expect(AuthUserSuccess()).toEqual({
      type: LOGIN_SUCCESS,
    });
    expect(AuthUserError({ some: 'error' })).toEqual({
      type: LOGIN_ERROR,
      error: { some: 'error' },
    });
  });
});
