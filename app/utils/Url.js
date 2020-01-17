import { push } from 'react-router-redux';
export function redirect(redirectTo, location) {
  let callback;
  if (location) {
    const { from } = location.state || { from: { pathname: redirectTo } };
    callback = push(from.pathname);
  } else {
    callback = push(redirectTo);
  }
  return callback;
}

export function prepareEndpoint(pattern, props) {
  const params = props && props.match ? props.match.params : {};
  const search = props && props.location ? props.location.search : '';
  params.search = search;
  const patternWithParams = pattern.replace(/:[^\s/]+/g, (arg) => params[arg.replace(':', '')]);
  const patternWithSearch = patternWithParams.replace(
    /\/\?[^\s/]+/g,
    (arg) => params[arg.replace('/?', '')],
  );

  return patternWithSearch;
}
