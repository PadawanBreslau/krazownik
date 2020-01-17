import { fromJS } from 'immutable';
import { unionArray } from 'utils/formatters';
import {
  LOAD_PAGEDATA_REQUEST,
  LOAD_PAGEDATA_SUCCESS,
  LOAD_PAGEDATA_ERROR,
  SUBMIT_PAGEDATA_SUCCESS,
  SUBMIT_PAGEDATA_ERROR,
  UPDATE_DATA_RECORD,
  UPDATE_RELATION_RECORD,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  data: [],
  initiated: false,
  endpoint: null,
});

export default function generateReducer(storeName) {
  function apiReducer(state = initialState, action) {
    switch (action.type) {
      case `${LOAD_PAGEDATA_REQUEST}/${storeName}`:
        return fromJS({
          loading: true,
          error: false,
          data: [],
          initiated: state.initiated,
          endpoint: action.endpoint,
        });
      case `${LOAD_PAGEDATA_SUCCESS}/${storeName}`:
        return state
          .set('loading', false)
          .set('initiated', true)
          .merge(action.payload);
      case `${LOAD_PAGEDATA_ERROR}/${storeName}`:
        return fromJS({
          loading: false,
          error: action.error,
          data: [],
          initiated: state.initiated,
        });
      case `${SUBMIT_PAGEDATA_SUCCESS}/${storeName}`:
        return state.set('loading', false).merge(action.payload);
      case `${SUBMIT_PAGEDATA_ERROR}/${storeName}`:
        return state
          .set('loading', false)
          .set('error', fromJS(action.error))
          .set('data', fromJS([]));
      case `${UPDATE_DATA_RECORD}/${storeName}`: {
        const elementToUpdate = state.get('data').findIndex((item) => item.get('id') === action.id);

        return state
          .set('loading', false)
          .setIn(['data', elementToUpdate, 'attributes', `${action.key}`], action.value);
      }
      case `${UPDATE_RELATION_RECORD}/${storeName}`: {
        const elementToUpdate = state.get('data').findIndex((item) => item.get('id') === action.id);
        const values = action.value;
        const includedValue = action.value.map((item) =>
          item.setIn(['attributes', 'title'], item.get('title')).delete('title'),
        );
        const mergedIncludedValues = unionArray(state.get('included'), includedValue);

        return state
          .set('loading', false)
          .mergeIn(['included'], mergedIncludedValues)
          .setIn(['data', elementToUpdate, 'relationships', `${action.key}`, 'data'], values);
      }
      default:
        return state;
    }
  }

  return apiReducer;
}
