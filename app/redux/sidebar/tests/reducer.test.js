import { fromJS } from 'immutable';
import sidebarReducer from '../reducer';

import {
  loadSidebar,
  loadSidebarSuccess,
  loadSidebarError,
  closeSidebar,
  updateSidebarData,
} from '../actions';

const initialState = fromJS({
  loading: false,
  error: false,
  data: {},
  visible: false,
});

const prePopulatedState = fromJS({
  loading: false,
  error: false,
  data: {
    id: 1,
    attributes: { questionAsked: false, interestIndicated: false },
  },
  visible: true,
});

describe('sidebarReducer', () => {
  it('returns the initial state', () => {
    expect(sidebarReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOAD_SIDEBAR', () => {
    expect(sidebarReducer(undefined, loadSidebar('4'))).toEqual(
      fromJS({
        loading: true,
        error: false,
        data: {},
        visible: false,
      }),
    );
  });

  it('should handle LOAD_SIDEBAR_SUCCESS', () => {
    expect(
      sidebarReducer(
        undefined,
        loadSidebarSuccess({
          data: { id: 1, attributes: { questionAsked: false, interestIndicated: false } },
        }),
      ),
    ).toEqual(
      fromJS({
        loading: false,
        error: false,
        data: {
          id: 1,
          attributes: { questionAsked: false, interestIndicated: false },
        },
        visible: true,
      }),
    );
  });

  it('should handle LOAD_SIDEBAR_ERROR', () => {
    expect(sidebarReducer(undefined, loadSidebarError('error'))).toEqual(
      fromJS({
        loading: false,
        error: 'error',
        data: {},
        visible: false,
      }),
    );
  });

  it('should handle CLOSE_SIDEBAR', () => {
    expect(sidebarReducer(undefined, closeSidebar())).toEqual(
      fromJS({
        loading: false,
        error: false,
        data: {},
        visible: false,
      }),
    );
  });

  it('should handle UPDATE_SIDEBAR_DATA', () => {
    expect(sidebarReducer(prePopulatedState, updateSidebarData(1, 'questionAsked', true))).toEqual(
      fromJS({
        loading: false,
        error: false,
        data: {
          id: 1,
          attributes: { questionAsked: true, interestIndicated: false },
        },
        visible: true,
      }),
    );
  });

  it('should return initial state when wrong id passed to udateSidebarData', () => {
    expect(sidebarReducer(prePopulatedState, updateSidebarData(2, 'questionAsked', true))).toEqual(
      fromJS({
        loading: false,
        error: false,
        data: {
          id: 1,
          attributes: { questionAsked: false, interestIndicated: false },
        },
        visible: true,
      }),
    );
  });
});
