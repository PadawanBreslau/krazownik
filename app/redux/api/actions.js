import {
  LOAD_PAGEDATA_REQUEST,
  LOAD_PAGEDATA_SUCCESS,
  LOAD_PAGEDATA_ERROR,
  SUMBIT_FILE_REQUEST,
  SUBMIT_FILE_SUCCESS,
  SUBMIT_FILE_ERROR,
  SUBMIT_PAGEDATA_REQUEST,
  SUBMIT_PAGEDATA_SUCCESS,
  SUBMIT_PAGEDATA_ERROR,
  UPDATE_DATA_RECORD,
  UPDATE_RELATION_RECORD,
} from './constants';

export default function generateActions(storeName) {
  return {
    loadPageData: (endpoint, callback, errorCallback) => ({
      type: `${LOAD_PAGEDATA_REQUEST}/${storeName}`,
      endpoint,
      callback,
      errorCallback,
    }),
    loadPageDataSuccess: (payload) => ({
      type: `${LOAD_PAGEDATA_SUCCESS}/${storeName}`,
      payload,
    }),
    loadPageDataError: (error) => ({
      type: `${LOAD_PAGEDATA_ERROR}/${storeName}`,
      error,
    }),
    uploadFileRequest: (endpoint, file, callback) => ({
      type: `${SUMBIT_FILE_REQUEST}/${storeName}`,
      endpoint,
      file,
      callback,
    }),
    uploadFileSuccess: (payload) => ({
      type: `${SUBMIT_FILE_SUCCESS}/${storeName}`,
      payload,
    }),
    uploadFileError: (error) => ({
      type: `${SUBMIT_FILE_ERROR}/${storeName}`,
      error,
    }),
    submitPageData: (
      endpoint,
      method,
      payload,
      successCallbacks,
      searchRedirectUrl,
      errorCallback,
    ) => ({
      type: `${SUBMIT_PAGEDATA_REQUEST}/${storeName}`,
      endpoint,
      method,
      payload: {
        data: {
          attributes: payload,
        },
      },
      successCallbacks,
      searchRedirectUrl,
      errorCallback,
    }),
    submitPageDataSuccess: (payload) => ({
      type: `${SUBMIT_PAGEDATA_SUCCESS}/${storeName}`,
      payload,
    }),
    submitPageDataError: (error) => ({
      type: `${SUBMIT_PAGEDATA_ERROR}/${storeName}`,
      error,
    }),
    updateRecord: (id, key, value) => ({
      type: `${UPDATE_DATA_RECORD}/${storeName}`,
      id,
      key,
      value,
    }),
    updateRelation: (id, key, value) => ({
      type: `${UPDATE_RELATION_RECORD}/${storeName}`,
      id,
      key,
      value,
    }),
  };
}
