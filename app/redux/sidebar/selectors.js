import { createSelector } from 'reselect';
import Jsona from 'jsona';

const selectCandidate = (state) => state.get('sidebar');
const dataFormatter = new Jsona();

const makeSelectSidebar = () =>
  createSelector(selectCandidate, (substate) => {
    const json = substate.toJS();
    const payload = dataFormatter.deserialize(json);
    return {
      loading: json.loading,
      error: json.error,
      payload,
      visible: json.visible,
    };
  });

export { makeSelectSidebar };
