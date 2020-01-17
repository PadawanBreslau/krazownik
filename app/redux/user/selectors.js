import { createSelector } from 'reselect';

const selectUserDomain = (state) => state.get('user');

const makeSelectUser = () => createSelector(selectUserDomain, (substate) => substate.toJS());

export default makeSelectUser;
export { selectUserDomain };
