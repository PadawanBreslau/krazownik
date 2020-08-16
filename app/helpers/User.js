import { getFromStorage } from 'helpers/Headers';

export function isLoggedIn() {
  const userName = getFromStorage('name');
  return userName !== null;
}
