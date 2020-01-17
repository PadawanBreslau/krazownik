import { call, put, takeLatest } from 'redux-saga/effects';
import Connection from 'helpers/Connection';
import { showUiError, showLoading, hideLoading } from 'redux/UI/actions';
import { loadSidebarSuccess, loadSidebarError } from './actions';
import { LOAD_SIDEBAR } from './constants';

function* fetchCandidateData({ id }) {
  const endpoint = `/candidates/${id}`;
  try {
    yield put(showLoading());
    const results = yield call(Connection.get, endpoint);
    yield put(loadSidebarSuccess(results));
    yield put(hideLoading());
  } catch (err) {
    if (err.response)
      yield put(
        showUiError('Connection error', `${err.response.status}: ${err.response.statusText}`),
      );
    yield put(loadSidebarError(err));
    yield put(showUiError(err));
  }
}

export default function* defaultSaga() {
  yield [takeLatest(LOAD_SIDEBAR, fetchCandidateData)];
}
