import { call, put, takeLatest, all } from 'redux-saga/effects';
import Connection from 'helpers/Connection';
import { showUiError, showLoading, hideLoading } from 'redux/UI/actions';
import { LOAD_PAGEDATA_REQUEST, SUBMIT_PAGEDATA_REQUEST } from './constants';
import generateActions from './actions';

export function* fetchApiDataSaga(storeName, { endpoint, page }) {
  const { loadPageDataSuccess, loadPageDataError, updatePageDataSuccess } = generateActions(
    storeName,
  );
  try {
    yield put(showLoading());
    const results = yield call(Connection.get, endpoint);
    if (page) {
      yield put(updatePageDataSuccess(results));
    } else {
      yield put(loadPageDataSuccess(results));
    }
    yield put(hideLoading());
  } catch (err) {
    yield put(showUiError(err));
    yield put(loadPageDataError(err));
  }
}
export function* sendApiDataSaga(storeName, { endpoint, method, payload, successCallbacks }) {
  const { submitPageDataSuccess, submitPageDataError, updatePageDataSuccess } = generateActions(
    storeName,
  );
  try {
    yield put(showLoading());
    const results = yield call(Connection[method], endpoint, payload);
    if (payload.data.attributes.page) {
      yield put(updatePageDataSuccess(results, endpoint));
    } else {
      yield put(submitPageDataSuccess(results, endpoint));
    }
    yield put(hideLoading());

    if (successCallbacks) {
      yield all(successCallbacks.map((callback) => put(callback)));
    }
  } catch (err) {
    yield put(showUiError(err));
    yield put(submitPageDataError(err));
  }
}

export default function generateSaga(storeName) {
  return function* defaultSaga() {
    yield takeLatest(`${LOAD_PAGEDATA_REQUEST}/${storeName}`, fetchApiDataSaga, storeName);
    yield takeLatest(`${SUBMIT_PAGEDATA_REQUEST}/${storeName}`, sendApiDataSaga, storeName);
  };
}
