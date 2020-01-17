import { ROLES } from '../rolesConstants';

const authHeaderKeys = [
  'Access-Token',
  'Token-Type',
  'Client',
  'Expiry',
  'Uid',
  'name',
  'isAdmin',
  'user-role',
  'email',
  'referrer',
];

export function getDefaultHeaders() {
  return {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
  };
}
export function getHeadersFromStorage() {
  return {
    Client: localStorage.getItem('Client'),
    Uid: localStorage.getItem('Uid'),
    'Access-Token': localStorage.getItem('Access-Token'),
  };
}
export function getFromStorage(key) {
  return localStorage.getItem(key);
}
export function removeFromStorage(key) {
  localStorage.removeItem(key);
}
export function setToStorage(key, value) {
  localStorage.setItem(key, value);
}
export function parseQuery(queryString) {
  const query = {};
  const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  pairs.map((pairItem) => {
    const pair = pairItem.split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    return null;
  });
  return query;
}
export function setHeadersFromQuery(search) {
  const queryParams = parseQuery(search);
  authHeaderKeys.forEach((key) => {
    const value = queryParams[key];
    if (value) localStorage.setItem(key, value);
  });
}
export function setHeadersToStorage(response) {
  authHeaderKeys.forEach((key) => {
    const value = response.headers.get(key);
    if (value) localStorage.setItem(key, value);
  });
  return response;
}
export function removeHeadersFromStorage() {
  authHeaderKeys.forEach((key) => {
    localStorage.removeItem(key);
  });
}
export function isUserInStorage() {
  return (
    localStorage.getItem('Access-Token') != null &&
    (!localStorage.getItem('isAdmin') || localStorage.getItem('isAdmin') === 'false')
  );
}
export function isRoleInStorage(role) {
  const userRole = localStorage.getItem('user-role');
  if (!role || userRole === ROLES.admin) return true;
  return role.includes(userRole);
}
export function isAdminInStorage() {
  return localStorage.getItem('Access-Token') != null && localStorage.getItem('isAdmin') === 'true';
}
