/*
 *
 * Messages reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SHOW_MSG,
  HIDE_MSG,
  SHOW_POPUP,
  HIDE_POPUP,
  SHOW_LOADING,
  HIDE_LOADING,
  SHOW_CONFIRMATION,
  HIDE_CONFIRMATION,
} from './constants';

const initialState = fromJS({
  message: {
    isActive: false,
    global: false,
    title: null,
    text: null,
    type: null,
  },
  modal: {
    visible: false,
    content: null,
  },
  confirmation: {
    visible: false,
    content: null,
  },
  loading: false,
});

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_POPUP:
      return state.setIn(['modal', 'visible'], true).setIn(['modal', 'content'], action.content);
    case HIDE_POPUP:
      if (action.result) {
        return state
          .setIn(['modal', 'visible'], false)
          .setIn(['message', 'isActive'], true)
          .setIn(['message', 'type'], 'success')
          .setIn(['message', 'text'], action.result);
      }
      return state.setIn(['modal', 'visible'], false);

    case SHOW_LOADING:
      return state.setIn(['message', 'isActive'], false).set('loading', true);

    case HIDE_LOADING:
      return state.set('loading', false);

    case SHOW_MSG:
      return state
        .set('loading', false)
        .setIn(['message', 'isActive'], true)
        .setIn(['message', 'global'], action.global)
        .mergeIn(['message'], action.data);

    case HIDE_MSG:
      return state.setIn(['message', 'isActive'], false);

    case SHOW_CONFIRMATION:
      return state
        .setIn(['confirmation', 'visible'], true)
        .setIn(['confirmation', 'content'], action.content);
    case HIDE_CONFIRMATION:
      if (action.result) {
        return state
          .setIn(['confirmation', 'visible'], false)
          .setIn(['message', 'isActive'], true)
          .setIn(['message', 'type'], 'success')
          .setIn(['message', 'text'], action.result);
      }
      return state.setIn(['confirmation', 'visible'], false);

    default:
      return state;
  }
}

export default uiReducer;
