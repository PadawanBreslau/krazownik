import { fromJS } from 'immutable';
import { selectUserDomain } from '../selectors';

describe('User selectors', () => {
  it('Selects user domain', () => {
    const uiState = fromJS({
      example: 'something',
    });
    const mockedState = fromJS({
      user: uiState,
    });
    expect(selectUserDomain(mockedState)).toEqual(uiState);
  });
});
