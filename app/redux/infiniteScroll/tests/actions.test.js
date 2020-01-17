import generateActions from '../actions';

import {
  CLEAR_PAGEDATA,
  LOAD_PAGEDATA_REQUEST,
  LOAD_PAGEDATA_SUCCESS,
  LOAD_PAGEDATA_ERROR,
  UPDATE_PAGEDATA_SUCCESS,
  SUBMIT_PAGEDATA_REQUEST,
  SUBMIT_PAGEDATA_SUCCESS,
  SUBMIT_PAGEDATA_ERROR,
  UPDATE_DATA_RECORD,
} from '../constants';

const {
  clearPageData,
  loadPageData,
  loadPageDataSuccess,
  loadPageDataError,
  updatePageDataSuccess,
  submitPageData,
  submitPageDataSuccess,
  submitPageDataError,
  updateRecord,
} = generateActions('testStore');

describe('auth reducer actions', () => {
  it('has a type of all actions', () => {
    expect(clearPageData()).toEqual({
      type: CLEAR_PAGEDATA + '/testStore', // eslint-disable-line prefer-template
    });
    expect(loadPageData('endpoint', 'page')).toEqual({
      type: LOAD_PAGEDATA_REQUEST + '/testStore', // eslint-disable-line prefer-template
      endpoint: 'endpoint',
      page: 'page',
    });
    expect(loadPageDataSuccess('exampleData')).toEqual({
      type: LOAD_PAGEDATA_SUCCESS + '/testStore', // eslint-disable-line prefer-template
      payload: 'exampleData',
    });
    expect(loadPageDataError()).toEqual({
      type: LOAD_PAGEDATA_ERROR + '/testStore', // eslint-disable-line prefer-template
    });
    expect(updatePageDataSuccess('exampleData')).toEqual({
      type: UPDATE_PAGEDATA_SUCCESS + '/testStore', // eslint-disable-line prefer-template
      payload: 'exampleData',
    });
    expect(submitPageData('endpoint', 'method', 'payload', 'callback')).toEqual({
      type: SUBMIT_PAGEDATA_REQUEST + '/testStore', // eslint-disable-line prefer-template
      endpoint: 'endpoint',
      method: 'method',
      successCallbacks: 'callback',
      payload: {
        data: {
          attributes: 'payload',
        },
      },
      search: undefined,
    });
    expect(submitPageDataSuccess()).toEqual({
      type: SUBMIT_PAGEDATA_SUCCESS + '/testStore', // eslint-disable-line prefer-template
    });
    expect(submitPageDataError()).toEqual({
      type: SUBMIT_PAGEDATA_ERROR + '/testStore', // eslint-disable-line prefer-template
    });
    expect(updateRecord(1, 'someKey', true)).toEqual({
      type: UPDATE_DATA_RECORD + '/testStore', // eslint-disable-line prefer-template
      id: 1,
      key: 'someKey',
      value: true,
    });
  });
});
