import {
  LOAD_SIDEBAR,
  LOAD_SIDEBAR_SUCCESS,
  LOAD_SIDEBAR_ERROR,
  CLOSE_SIDEBAR,
  UPDATE_SIDEBAR_DATA,
} from '../constants';

import {
  loadSidebar,
  loadSidebarSuccess,
  loadSidebarError,
  closeSidebar,
  updateSidebarData,
} from '../actions';

describe('Sidebar reducer actions', () => {
  it('has a type of all actions', () => {
    expect(loadSidebar('id')).toEqual({
      type: LOAD_SIDEBAR,
      id: 'id',
    });
    expect(loadSidebarSuccess('payload')).toEqual({
      type: LOAD_SIDEBAR_SUCCESS,
      payload: 'payload',
    });
    expect(loadSidebarError('error')).toEqual({
      type: LOAD_SIDEBAR_ERROR,
      error: 'error',
    });
    expect(closeSidebar()).toEqual({
      type: CLOSE_SIDEBAR,
    });
    expect(updateSidebarData('id', 'key', true)).toEqual({
      type: UPDATE_SIDEBAR_DATA,
      id: 'id',
      key: 'key',
      value: true,
    });
  });
});
