import { fromJS } from 'immutable';
import { unionArray } from 'utils/formatters';
import {
  LOAD_SIDEBAR,
  LOAD_SIDEBAR_SUCCESS,
  LOAD_SIDEBAR_ERROR,
  CLOSE_SIDEBAR,
  UPDATE_SIDEBAR_DATA,
  UPDATE_SIDEBAR_DATA_RELATION,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  data: {},
  visible: false,
});

function SidebarReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SIDEBAR:
      return fromJS({
        loading: true,
        error: false,
        data: {},
        visible: false,
      });
    case LOAD_SIDEBAR_SUCCESS:
      return state
        .set('loading', false)
        .set('visible', true)
        .merge(action.payload);
    case LOAD_SIDEBAR_ERROR:
      return fromJS({
        loading: false,
        error: action.error,
        data: {},
        visible: false,
      });
    case CLOSE_SIDEBAR:
      return state.set('visible', false);
    case UPDATE_SIDEBAR_DATA: {
      const candidateId = state.getIn(['data', 'id']);
      if (candidateId !== action.id) {
        return state;
      }

      return state
        .set('loading', false)
        .setIn(['data', 'attributes', `${action.key}`], action.value);
    }
    case UPDATE_SIDEBAR_DATA_RELATION: {
      const candidateId = state.getIn(['data', 'id']);
      if (candidateId !== action.id) {
        return state;
      }

      const values = action.value;
      const includedValue = action.value.map((item) =>
        item.setIn(['attributes', 'title'], item.get('title')).delete('title'),
      );
      const mergedIncludedValues = unionArray(state.get('included'), includedValue);

      return state
        .set('loading', false)
        .mergeIn(['included'], mergedIncludedValues)
        .setIn(['data', 'relationships', `${action.key}`, 'data'], values);
    }
    default:
      return state;
  }
}

export default SidebarReducer;
