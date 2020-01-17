import {
  SHOW_MSG,
  HIDE_MSG,
  SHOW_POPUP,
  HIDE_POPUP,
  SHOW_LOADING,
  HIDE_LOADING,
  SHOW_CONFIRMATION,
  HIDE_CONFIRMATION,
} from '../constants';

import {
  showLoading,
  hideLoading,
  showModal,
  hideModal,
  showUiError,
  showUiSuccess,
  hideMsg,
  showConfirmation,
  hideConfirmation,
} from '../actions';

describe('UI reducer actions', () => {
  it('has a type of all actions', () => {
    expect(showLoading()).toEqual({
      type: SHOW_LOADING,
    });
    expect(hideLoading()).toEqual({
      type: HIDE_LOADING,
    });
    expect(showModal('content')).toEqual({
      type: SHOW_POPUP,
      content: 'content',
    });
    expect(hideModal('result')).toEqual({
      type: HIDE_POPUP,
      result: 'result',
    });
    expect(showUiError('title', 'text')).toEqual({
      type: SHOW_MSG,
      data: {
        type: 'error',
        title: 'title',
        text: 'text',
      },
    });
    expect(showUiSuccess('text', 'title')).toEqual({
      type: SHOW_MSG,
      data: {
        type: 'success',
        title: 'title',
        text: 'text',
      },
    });
    expect(hideMsg()).toEqual({
      type: HIDE_MSG,
    });
    expect(showConfirmation('content')).toEqual({
      type: SHOW_CONFIRMATION,
      content: 'content',
    });
    expect(hideConfirmation('content')).toEqual({
      type: HIDE_CONFIRMATION,
      result: 'content',
    });
  });
});
