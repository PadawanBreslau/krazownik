import { call, put, all, takeLatest } from 'redux-saga/effects';
import isArray from 'lodash/isArray';
import Connection from 'helpers/Connection';
import { showUiError, showLoading, hideLoading } from 'redux/UI/actions';
import { redirect } from 'helpers/Url';
import { LOAD_PAGEDATA_REQUEST, SUBMIT_PAGEDATA_REQUEST, SUMBIT_FILE_REQUEST } from './constants';
import generateActions from './actions';

function* runComplexTypeCallback(callback, resultOrError) {
  if (callback) {
    if (isArray(callback)) {
      const actionsCallback = callback.filter((item) => typeof item === 'object');
      const funcCallback = callback.filter((item) => typeof item === 'function');
      yield all(actionsCallback.map((callbackItem) => put(callbackItem)));
      yield all(funcCallback.map((callbackItem) => call(callbackItem, resultOrError)));
    } else {
      yield call(callback, resultOrError);
    }
  }
}
export function* fetchApiDataSaga({ storeName, local }, { endpoint, callback, errorCallback }) {
  const { loadPageDataSuccess, loadPageDataError } = generateActions(storeName);

  try {
    if (!local) yield put(showLoading());

    if (endpoint.includes('undefined')) {
      yield put(loadPageDataSuccess({ payload: {} }));
      yield put(hideLoading());
    } else {
      const results = yield call(Connection.get, endpoint);

      yield put(loadPageDataSuccess(results));
      yield put(hideLoading());
      yield runComplexTypeCallback(callback, results);
    }
  } catch (err) {
    yield put(showUiError(err));
    yield put(loadPageDataError(err));
    yield runComplexTypeCallback(errorCallback, err);
  }
}
export function* uploadFileSaga(storeName, { endpoint, file, callback }) {
  const { uploadFileSuccess, uploadFileError } = generateActions(storeName);
  try {
    yield put(showLoading());
    const results = yield call(Connection.post, endpoint, file);
    yield put(uploadFileSuccess(results));
    yield put(hideLoading());
    yield runComplexTypeCallback(callback, results);
  } catch (err) {
    yield put(showUiError(err));
    yield put(uploadFileError(err));
  }
}
export function* sendApiDataSaga(
  storeName,
  { endpoint, method, payload, successCallbacks, searchRedirectUrl, errorCallback },
) {
  const { submitPageDataSuccess, submitPageDataError } = generateActions(storeName);
  try {
    yield put(showLoading());
    const results = yield call(Connection[method], endpoint, payload);
    yield put(submitPageDataSuccess(results));
    yield put(hideLoading());
    if (successCallbacks) {
      if (isArray(successCallbacks)) {
        const actionsCallback = successCallbacks.filter((item) => typeof item === 'object');
        const funcCallback = successCallbacks.filter((item) => typeof item === 'function');
        yield all(actionsCallback.map((callbackItem) => put(callbackItem)));
        yield all(funcCallback.map((callbackItem) => call(callbackItem, results)));
      } else {
        yield call(successCallbacks, results);
      }
    }

    if (searchRedirectUrl) {
      yield put(redirect(`${searchRedirectUrl}${results.meta.searchId}`));
    }
  } catch (err) {
    yield put(showUiError(err));
    yield put(submitPageDataError(err));
    yield runComplexTypeCallback(errorCallback, err);
  }
}

export default function generateSaga(storeName, local) {
  return function* defaultSaga() {
    yield takeLatest(`${LOAD_PAGEDATA_REQUEST}/${storeName}`, fetchApiDataSaga, {
      storeName,
      local,
    });
    yield takeLatest(`${SUBMIT_PAGEDATA_REQUEST}/${storeName}`, sendApiDataSaga, storeName);
    yield takeLatest(`${SUMBIT_FILE_REQUEST}/${storeName}`, uploadFileSaga, storeName);
  };
}
