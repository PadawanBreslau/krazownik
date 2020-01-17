import { createSelector } from 'reselect';
import Jsona from 'jsona';

const dataFormatter = new Jsona();
const generateSelectApi = (storeName) =>
  createSelector(
    (state) => state.get(storeName),
    (substate) => {
      const json = substate.toJS();
      const payload = dataFormatter.deserialize(json); // eslint-disable-line no-unused-vars
      return {
        loading: json.loading,
        error: json.error,
        meta: json.meta ? json.meta : {},
        payload,
        endpoint: json.endpoint,
        filters: json.filters,
      };
    },
  );
export default generateSelectApi;
