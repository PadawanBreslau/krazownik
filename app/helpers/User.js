import { getFromStorage } from 'helpers/Headers';
import { ROLES } from '../rolesConstants';

export function isEnhancedUser() {
  const userRole = getFromStorage('user-role') || '';

  return [ROLES.admin, ROLES.talentAdvocate, ROLES.sourcer].includes(userRole);
}

export function isTalentAdvocateOrSourcer(userRole = null) {
  const userRoleSecure = userRole || getFromStorage('user-role') || '';

  return [ROLES.talentAdvocate, ROLES.sourcer].includes(userRoleSecure);
}

export function isCompany(userRole = null) {
  const userRoleSecure = userRole || getFromStorage('user-role') || '';

  return userRoleSecure === ROLES.company;
}
