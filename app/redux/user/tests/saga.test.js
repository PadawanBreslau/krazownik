import { put, takeLatest } from 'redux-saga/effects';
import { showUiError } from 'redux/UI/actions';
import { LOGOUT_REQUEST, LOGIN_REQUEST } from '../constants';
import { LogOutSuccess, LogOutError, AuthUserSuccess, AuthUserError } from '../actions';

import defaultSaga, { logOutSaga, logInSaga } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('User: Logout Saga', () => {
  let logoutRequestGenerator;
  const exampleResponse = {};
  beforeEach(() => {
    logoutRequestGenerator = logOutSaga({ endpoint: '/endpoint' });
    const putLoadingDescriptor = logoutRequestGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();
    const callDescriptor = logoutRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the LogOutSuccess action if it requests the data successfully', () => {
    const putDescriptor = logoutRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(LogOutSuccess(exampleResponse)));
  });
  it('should call the LogOutError action if the response errors', () => {
    const response = { some: 'Logout error' };
    const putShowErrorDescriptor = logoutRequestGenerator.throw(response).value;
    expect(putShowErrorDescriptor).toEqual(put(showUiError(response)));
    const putErrorDescriptor = logoutRequestGenerator.next().value;
    expect(putErrorDescriptor).toEqual(put(LogOutError(response)));
  });
});
describe('User: Login Saga', () => {
  let logoutRequestGenerator;
  const exampleResponse = {};
  const callback = jest.fn();
  beforeEach(() => {
    logoutRequestGenerator = logInSaga({
      endpoint: '/endpoint',
      payload: {},
      successCallback: callback,
    });
    const putLoadingDescriptor = logoutRequestGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();
    const callDescriptor = logoutRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the LogInSuccess action if it requests the data successfully', () => {
    const putDescriptor = logoutRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(AuthUserSuccess(exampleResponse)));
  });
  it('should do the callback', () => {
    const putDescriptor = logoutRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(AuthUserSuccess(exampleResponse)));
    const endLoadingDescriptor = logoutRequestGenerator.next(exampleResponse).value;
    expect(endLoadingDescriptor).toMatchSnapshot();
    const putCallbackDescriptor = logoutRequestGenerator.next(exampleResponse).value;
    expect(putCallbackDescriptor).toEqual(put(callback));
  });
  it('should call the LogInError action if the response errors', () => {
    const response = { some: 'Logout error' };
    const putShowErrorDescriptor = logoutRequestGenerator.throw(response).value;
    expect(putShowErrorDescriptor).toEqual(put(showUiError(response)));
    const putErrorDescriptor = logoutRequestGenerator.next().value;
    expect(putErrorDescriptor).toEqual(put(AuthUserError(response)));
  });
});

describe('User: defaultSaga watcher', () => {
  const watcher = defaultSaga();
  it('should start task to watch for LOGOUT_REQUEST action', () => {
    const takeLatestDescriptor = watcher.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOGOUT_REQUEST, logOutSaga));
  });
  it('should start task to watch for LOGIN_REQUEST action', () => {
    const takeLatestDescriptor = watcher.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOGIN_REQUEST, logInSaga));
  });
});
