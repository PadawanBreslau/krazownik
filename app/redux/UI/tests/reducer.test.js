import { fromJS } from 'immutable';
import uiReducer from '../reducer';

import {
  showLoading,
  hideLoading,
  showModal,
  hideModal,
  showUiError,
  hideMsg,
  showConfirmation,
  hideConfirmation,
} from '../actions';

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

describe('uiReducer', () => {
  it('returns the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SHOW_LOADING', () => {
    expect(uiReducer(undefined, showLoading())).toEqual(
      fromJS({
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
        loading: true,
      }),
    );
  });

  it('should handle HIDE_LOADING', () => {
    expect(uiReducer(undefined, hideLoading())).toEqual(
      fromJS({
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
      }),
    );
  });

  it('should handle SHOW_MSG', () => {
    expect(uiReducer(undefined, showModal('content'))).toEqual(
      fromJS({
        message: {
          isActive: false,
          global: false,
          title: null,
          text: null,
          type: null,
        },
        modal: {
          visible: true,
          content: 'content',
        },
        confirmation: {
          visible: false,
          content: null,
        },
        loading: false,
      }),
    );
  });

  it('should handle HIDE_POPUP', () => {
    expect(uiReducer(undefined, hideModal('result'))).toEqual(
      fromJS({
        message: {
          isActive: true,
          global: false,
          title: null,
          text: 'result',
          type: 'success',
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
      }),
    );
  });

  it('should handle SHOW_MSG', () => {
    expect(uiReducer(undefined, showUiError('title', 'text'))).toEqual(
      fromJS({
        message: {
          isActive: true,
          global: undefined,
          title: 'title',
          text: 'text',
          type: 'error',
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
      }),
    );
  });

  it('should handle HIDE_MSG', () => {
    expect(uiReducer(undefined, hideMsg())).toEqual(
      fromJS({
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
      }),
    );
  });

  it('should handle SHOW_CONFIRMATION', () => {
    expect(uiReducer(undefined, showConfirmation('content'))).toEqual(
      fromJS({
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
          visible: true,
          content: 'content',
        },
        loading: false,
      }),
    );
  });

  it('should handle HIDE_CONFIRMATION', () => {
    expect(uiReducer(undefined, hideConfirmation('content'))).toEqual(
      fromJS({
        message: {
          isActive: true,
          global: false,
          title: null,
          text: 'content',
          type: 'success',
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
      }),
    );
  });
});
