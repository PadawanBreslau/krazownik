import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_SIDEBAR } from './constants';

export default function* defaultSaga() {
  yield [takeLatest(LOAD_SIDEBAR, fetchCandidateData)];
}
