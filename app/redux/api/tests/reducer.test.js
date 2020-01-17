import { fromJS } from 'immutable';
import generateReducer from '../reducer';
import generateActions from '../actions';

const { loadPageData, loadPageDataSuccess, loadPageDataError } = generateActions('testStore');
const apiReducer = generateReducer('testStore');

const initialState = fromJS({
  loading: false,
  error: false,
  data: [],
  initiated: false,
  endpoint: null,
});

describe('apiReducer', () => {
  it('returns the initial state', () => {
    expect(apiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOAD_PAGEDATA_REQUEST', () => {
    expect(apiReducer(undefined, loadPageData('endpoint'))).toEqual(
      fromJS({
        loading: true,
        error: false,
        data: [],
        initiated: undefined,
        endpoint: 'endpoint',
      }),
    );
  });

  it('should handle LOAD_PAGEDATA_SUCCESS', () => {
    expect(apiReducer(undefined, loadPageDataSuccess())).toEqual(
      fromJS({
        loading: false,
        error: false,
        data: [],
        initiated: true,
        endpoint: null,
      }),
    );
  });

  it('should handle LOAD_PAGEDATA_ERROR', () => {
    expect(apiReducer(undefined, loadPageDataError('error'))).toEqual(
      fromJS({
        loading: false,
        error: 'error',
        data: [],
        initiated: undefined,
      }),
    );
  });
});
