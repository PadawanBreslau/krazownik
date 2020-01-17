import { push } from 'react-router-redux';
import snakeCase from 'lodash/snakeCase';

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
  const params = props
    ? {
        ...props,
        ...(props.match ? props.match.params : {}),
      }
    : {};
  const patternWithParams = pattern.replace(/:[^\s/]+/g, (arg) => params[arg.replace(':', '')]);
  return patternWithParams;
}

export function prepareSearchEndpoint(formattedEndpoint, payload) {
  const searchString = payload.search;
  const searchEndpoint = `${formattedEndpoint}?keyword=${searchString}`;

  return searchEndpoint;
}

export function prepareFiltersEndpoint(endpoint, payload) {
  const searchQuery = payload.query ? `query=${encodeURIComponent(payload.query)}` : '';
  const sorting = payload.sort ? `&sort=${encodeURIComponent(payload.sort)}` : '';
  const { filters } = payload;
  let filtersUrl = '';

  if (payload.period && !filters) {
    filtersUrl = `&filter[period]=${payload.period}`;
  } else if (filters) {
    filtersUrl = `&${Object.keys(filters)
      .map((prop) =>
        [`filter[${snakeCase(prop)}]`, filters[prop]].map(encodeURIComponent).join('='),
      )
      .join('&')}`;
  }
  const endpointURI = `${endpoint}?${searchQuery}${filtersUrl}${sorting}`;

  return endpointURI;
}

export function preparePaginatedFiltersEndpoint(endpoint, payload, page) {
  const paging = page ? `&page=${page}` : '';
  return `${prepareFiltersEndpoint(endpoint, payload)}${paging}`;
}

export function prepareUtmSearchParams(data) {
  const params = [
    'source',
    'medium',
    'campaign',
    'adgroup',
    'keyword',
    'matchtype',
    'device',
    'referrer',
    'content',
    'utmSource',
    'utmMedium',
    'utmCampaign',
    'utmAdgroud',
    'utmPlacement',
    'utmContent',
  ];

  const paramsString = params
    .reduce((result, param) => {
      if (data[param]) {
        result.push(`${snakeCase(param)}=${data[param]}`);
      }
      return result;
    }, [])
    .join('&');

  return `${paramsString ? `?${paramsString}` : ''}`;
}
