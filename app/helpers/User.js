import { getFromStorage } from 'helpers/Headers';
import { ROLES } from '../rolesConstants';

export function isLoggedIn() {
  const userName = getFromStorage('name');

  console.log("Logged in as: ", userName);

  return userName !== null;
}
