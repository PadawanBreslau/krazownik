import { fromJS } from 'immutable';
import generateReducer from '../reducer';
import generateActions from '../actions';

const {
  clearPageData,
  loadPageData,
  loadPageDataSuccess,
  loadPageDataError,
  submitPageDataSuccess,
  updatePageDataSuccess,
  updateRecord,
  updateRelation,
} = generateActions('testStore');
const infiniteScrollReducer = generateReducer('testStore');

const initialState = fromJS({
  loading: false,
  error: false,
  endpoint: false,
  data: [],
  filters: {},
});

const initialPopulatedState = fromJS({
  loading: false,
  error: false,
  endpoint: false,
  data: [
    { id: 1, attributes: { questionAsked: false, interestIndicated: false } },
    { id: 2, attributes: { questionAsked: true, interestIndicated: false } },
  ],
  filters: {},
});

describe('infiniteScrollReducer', () => {
  it('returns the initial state', () => {
    expect(infiniteScrollReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CLEAR_PAGEDATA', () => {
    expect(infiniteScrollReducer(undefined, clearPageData())).toEqual(initialState);
  });

  it('should handle LOAD_PAGEDATA_REQUEST', () => {
    expect(infiniteScrollReducer(undefined, loadPageData('endpoint'))).toEqual(
      fromJS({
        loading: true,
        error: false,
        endpoint: 'endpoint',
        data: [],
        filters: {},
      }),
    );
  });

  it('should handle LOAD_PAGEDATA_SUCCESS', () => {
    expect(infiniteScrollReducer(undefined, loadPageDataSuccess({ data: [] }))).toEqual(
      fromJS({
        loading: false,
        error: false,
        endpoint: false,
        data: [],
        filters: undefined,
        meta: undefined,
        included: undefined,
      }),
    );
  });

  it('should handle LOAD_PAGEDATA_ERROR', () => {
    expect(infiniteScrollReducer(undefined, loadPageDataError('error'))).toEqual(
      fromJS({
        loading: false,
        error: 'error',
        data: [],
      }),
    );
  });

  it('should handle SUBMIT_PAGEDATA_SUCCESS', () => {
    expect(
      infiniteScrollReducer(undefined, submitPageDataSuccess({ data: [] }, 'endpoint')),
    ).toEqual(
      fromJS({
        loading: false,
        error: false,
        endpoint: 'endpoint',
        data: [],
        filters: {},
      }),
    );
  });

  it('should handle UPDATE_PAGEDATA_SUCCESS', () => {
    expect(infiniteScrollReducer(undefined, updatePageDataSuccess({ data: [1, 2, 3] }))).toEqual(
      fromJS({
        loading: false,
        error: false,
        endpoint: false,
        data: [1, 2, 3],
        filters: {},
        meta: undefined,
      }),
    );
  });

  it('should handle UPDATE_DATA_RECORD', () => {
    expect(
      infiniteScrollReducer(initialPopulatedState, updateRecord(2, 'interestIndicated', true)),
    ).toEqual(
      fromJS({
        loading: false,
        error: false,
        endpoint: false,
        data: [
          { id: 1, attributes: { questionAsked: false, interestIndicated: false } },
          { id: 2, attributes: { questionAsked: true, interestIndicated: true } },
        ],
        filters: {},
      }),
    );
  });

  it('should handle UPDATE_RELATION_RECORD', () => {
    const predefinedState = fromJS({
      loading: false,
      error: false,
      endpoint: false,
      data: [
        {
          id: 1,
          attributes: { questionAsked: false, interestIndicated: false },
          relationships: {
            starPositions: {
              data: [{ id: 12, type: 'star_position' }, { id: 20, type: 'star_position' }],
            },
          },
        },
        { id: 2, attributes: { questionAsked: true, interestIndicated: false } },
      ],
      filters: {},
      included: [
        {
          id: 12,
          type: 'star_position',
          attributes: { title: 'new' },
        },
        {
          id: 20,
          type: 'star_position',
          attributes: { title: 'marketer' },
        },
      ],
    });
    const payload = fromJS([
      { id: 12, type: 'star_position', title: 'new' },
      { id: 34, type: 'star_position', title: 'manager' },
    ]);

    expect(
      infiniteScrollReducer(predefinedState, updateRelation(1, 'starPositions', payload)),
    ).toEqual(
      fromJS({
        loading: false,
        error: false,
        endpoint: false,
        data: [
          {
            id: 1,
            attributes: { questionAsked: false, interestIndicated: false },
            relationships: {
              starPositions: {
                data: [
                  { id: 12, type: 'star_position', title: 'new' },
                  { id: 34, type: 'star_position', title: 'manager' },
                ],
              },
            },
          },
          { id: 2, attributes: { questionAsked: true, interestIndicated: false } },
        ],
        filters: {},
        included: [
          {
            id: 12,
            type: 'star_position',
            attributes: { title: 'new' },
          },
          {
            id: 20,
            type: 'star_position',
            attributes: { title: 'marketer' },
          },
          {
            id: 34,
            type: 'star_position',
            attributes: { title: 'manager' },
          },
        ],
      }),
    );
  });
});
