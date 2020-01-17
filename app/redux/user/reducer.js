import { fromJS } from 'immutable';
import { getFromStorage, setToStorage } from 'helpers/Headers';

import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: null,
  data: {},
  name: getFromStorage('name'),
});

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return state.set('loading', true).set('error', null);
    case LOGOUT_SUCCESS:
      return state
        .set('loading', false)
        .set('redirect', true)
        .set('data', fromJS({}));
    case LOGOUT_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);
    case LOGIN_REQUEST:
      return state.set('loading', true).set('error', null);
    case LOGIN_SUCCESS:
      setToStorage('name', action.data.data.name);
      setToStorage('isAdmin', action.isAdmin);
      return state
        .set('loading', false)
        .set('redirect', true)
        .set('name', action.data.data.name)
        .set('data', fromJS(action.data.data));
    case LOGIN_ERROR:
      return state.set('error', fromJS(action.error)).set('loading', false);
    default:
      return state;
  }
}

export default uiReducer;
