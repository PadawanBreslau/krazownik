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
    default:
      return state;
  }
}

export default SidebarReducer;
