import { createSelector } from 'reselect';

/**
 * Direct selector to the messages state domain
 */
const selectUiDomain = (state) => state.get('ui');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Messages
 */

const makeSelectUi = () => createSelector(selectUiDomain, (substate) => substate.toJS());

export default makeSelectUi;
export { selectUiDomain };
