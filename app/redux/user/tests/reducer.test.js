import { fromJS } from 'immutable';
import uiReducer from '../reducer';
import {
  LogOut,
  LogOutSuccess,
  LogOutError,
  AuthUser,
  AuthUserSuccess,
  AuthUserError,
} from '../actions';

const initialState = {
  loading: false,
  error: null,
  data: {},
  name: null,
};

describe('User reducer', () => {
  it('returns the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(fromJS(initialState));
  });

  it('should handle LOGOUT_REQUEST', () => {
    expect(uiReducer(undefined, LogOut({ example: 'data' }))).toEqual(
      fromJS({
        ...initialState,
        loading: true,
      }),
    );
  });
  it('should handle LOGOUT_SUCCESS', () => {
    expect(uiReducer(undefined, LogOutSuccess())).toEqual(
      fromJS({
        ...initialState,
        loading: false,
        redirect: true,
      }),
    );
  });
  it('should handle LOGOUT_ERROR', () => {
    expect(uiReducer(undefined, LogOutError({ some: 'error' }))).toEqual(
      fromJS({
        ...initialState,
        loading: false,
        error: { some: 'error' },
      }),
    );
  });
  it('should handle LOGIN_REQUEST', () => {
    expect(uiReducer(undefined, AuthUser({ example: 'data' }))).toEqual(
      fromJS({
        ...initialState,
        loading: true,
      }),
    );
  });
  it('should handle LOGIN_SUCCESS', () => {
    expect(
      uiReducer(
        undefined,
        AuthUserSuccess({ data: { example: 'data', name: 'Test', lastName: 'Testerson' } }),
      ),
    ).toEqual(
      fromJS({
        ...initialState,
        loading: false,
        redirect: true,
        name: 'Test',
        data: {
          example: 'data',
          name: 'Test',
          lastName: 'Testerson',
        },
      }),
    );
  });
  it('should handle LOGIN_ERROR', () => {
    expect(uiReducer(undefined, AuthUserError({ some: 'error' }))).toEqual(
      fromJS({
        ...initialState,
        loading: false,
        error: { some: 'error' },
      }),
    );
  });
});
