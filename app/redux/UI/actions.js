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

export function showLoading() {
  return {
    type: SHOW_LOADING,
  };
}
export function hideLoading() {
  return {
    type: HIDE_LOADING,
  };
}

export function showModal(content) {
  return {
    type: SHOW_POPUP,
    content,
  };
}
export function hideModal(result) {
  return {
    type: HIDE_POPUP,
    result,
  };
}

export function showUiError(title, text) {
  return {
    type: SHOW_MSG,
    data: {
      type: 'error',
      title,
      text,
    },
  };
}
export function showUiSuccess(text, title) {
  return {
    type: SHOW_MSG,
    data: {
      type: 'success',
      text,
      title,
    },
  };
}
export function hideMsg() {
  return {
    type: HIDE_MSG,
  };
}

export function showConfirmation(content) {
  return {
    type: SHOW_CONFIRMATION,
    content,
  };
}
export function hideConfirmation(result) {
  return {
    type: HIDE_CONFIRMATION,
    result,
  };
}
