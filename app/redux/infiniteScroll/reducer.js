import { fromJS } from 'immutable';
import { unionArray } from 'utils/formatters';
import {
  CLEAR_PAGEDATA,
  LOAD_PAGEDATA_REQUEST,
  LOAD_PAGEDATA_SUCCESS,
  UPDATE_PAGEDATA_SUCCESS,
  LOAD_PAGEDATA_ERROR,
  SUBMIT_PAGEDATA_SUCCESS,
  UPDATE_DATA_RECORD,
  UPDATE_RELATION_RECORD,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  endpoint: false,
  data: [],
  filters: {},
});

export default function generateReducer(storeName) {
  function infiniteScrollReducer(state = initialState, action) {
    switch (action.type) {
      case `${CLEAR_PAGEDATA}/${storeName}`:
        return initialState;
      case `${LOAD_PAGEDATA_REQUEST}/${storeName}`:
        return state.set('loading', true).set('endpoint', action.endpoint);
      case `${LOAD_PAGEDATA_SUCCESS}/${storeName}`:
        return state
          .set('loading', false)
          .update('data', () => fromJS(action.payload.data))
          .set('meta', action.payload.meta)
          .set('included', action.payload.included)
          .set('filters', action.payload.data.attributes);
      case `${LOAD_PAGEDATA_ERROR}/${storeName}`:
        return fromJS({
          loading: false,
          error: action.error,
          data: [],
        });
      case `${UPDATE_PAGEDATA_SUCCESS}/${storeName}`:
        return state
          .set('loading', false)
          .update('data', (list) => list.concat(fromJS(action.payload.data)))
          .set('meta', action.payload.meta);
      case `${SUBMIT_PAGEDATA_SUCCESS}/${storeName}`:
        return state
          .set('loading', false)
          .set('endpoint', action.endpoint)
          .merge(action.payload);
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

  return infiniteScrollReducer;
}
