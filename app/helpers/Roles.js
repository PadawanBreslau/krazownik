import { ROLES } from '../rolesConstants';

export function registrationRole(path) {
  if (path === '/admin_signup') {
    return ROLES.admin;
  }

  if (path === '/talent_advocate_signup') {
    return ROLES.talentAdvocate;
  }

  if (path === '/sourcer_signup') {
    return ROLES.sourcer;
  }
  return ROLES.company;
}
