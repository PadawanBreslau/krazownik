import {
  CLEAR_PAGEDATA,
  LOAD_PAGEDATA_REQUEST,
  LOAD_PAGEDATA_SUCCESS,
  UPDATE_PAGEDATA_SUCCESS,
  LOAD_PAGEDATA_ERROR,
  SUBMIT_PAGEDATA_REQUEST,
  SUBMIT_PAGEDATA_SUCCESS,
  SUBMIT_PAGEDATA_ERROR,
  UPDATE_DATA_RECORD,
  UPDATE_RELATION_RECORD,
} from './constants';

export default function generateActions(storeName) {
  return {
    clearPageData: () => ({
      type: `${CLEAR_PAGEDATA}/${storeName}`,
    }),
    loadPageData: (endpoint, page) => ({
      type: `${LOAD_PAGEDATA_REQUEST}/${storeName}`,
      endpoint,
      page,
    }),
    loadPageDataSuccess: (payload) => ({
      type: `${LOAD_PAGEDATA_SUCCESS}/${storeName}`,
      payload,
    }),
    updatePageDataSuccess: (payload) => ({
      type: `${UPDATE_PAGEDATA_SUCCESS}/${storeName}`,
      payload,
    }),
    loadPageDataError: (error) => ({
      type: `${LOAD_PAGEDATA_ERROR}/${storeName}`,
      error,
    }),
    submitPageData: (endpoint, method, payload, successCallbacks, search) => ({
      type: `${SUBMIT_PAGEDATA_REQUEST}/${storeName}`,
      endpoint,
      method,
      payload: {
        data: {
          attributes: payload,
        },
      },
      successCallbacks,
      search,
    }),
    submitPageDataSuccess: (payload, endpoint) => ({
      type: `${SUBMIT_PAGEDATA_SUCCESS}/${storeName}`,
      payload,
      endpoint,
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
