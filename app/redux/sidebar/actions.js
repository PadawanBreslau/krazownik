import {
  LOAD_SIDEBAR,
  LOAD_SIDEBAR_SUCCESS,
  LOAD_SIDEBAR_ERROR,
  CLOSE_SIDEBAR,
  UPDATE_SIDEBAR_DATA,
  UPDATE_SIDEBAR_DATA_RELATION,
} from './constants';

export function loadSidebar(id) {
  return {
    type: LOAD_SIDEBAR,
    id,
  };
}

export function loadSidebarSuccess(payload) {
  return {
    type: LOAD_SIDEBAR_SUCCESS,
    payload,
  };
}

export function loadSidebarError(error) {
  return {
    type: LOAD_SIDEBAR_ERROR,
    error,
  };
}

export function closeSidebar() {
  return {
    type: CLOSE_SIDEBAR,
  };
}

export function updateSidebarData(id, key, value) {
  return {
    type: UPDATE_SIDEBAR_DATA,
    id,
    key,
    value,
  };
}

export function updateSidebarDataRelation(id, key, value) {
  return {
    type: UPDATE_SIDEBAR_DATA_RELATION,
    id,
    key,
    value,
  };
}
