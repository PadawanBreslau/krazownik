import { call, put, takeLatest } from 'redux-saga/effects';
import Authenticator from 'helpers/Authenticator';
import { showUiError, showLoading, hideLoading } from 'redux/UI/actions';
import { LOGOUT_REQUEST, LOGIN_REQUEST } from './constants';
import { LogOutSuccess, LogOutError, AuthUserSuccess, AuthUserError } from './actions';

export function* logOutSaga({ endpoint }) {
  try {
    yield put(showLoading());
    yield call(Authenticator.logout, endpoint);
    yield put(LogOutSuccess());
    yield put(hideLoading());
  } catch (err) {
    yield put(showUiError(err));
    yield put(LogOutError(err));
  }
}
export function* logInSaga({ endpoint, payload, successCallback, isAdmin }) {
  try {
    yield put(showLoading());
    const results = yield call(Authenticator.login, endpoint, payload);
    yield put(AuthUserSuccess(results, isAdmin));
    yield put(hideLoading());
    if (successCallback) yield put(successCallback);
  } catch (err) {
    yield put(showUiError(err));
    yield put(AuthUserError(err));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* defaultSaga() {
  yield takeLatest(LOGOUT_REQUEST, logOutSaga);
  yield takeLatest(LOGIN_REQUEST, logInSaga);
}
