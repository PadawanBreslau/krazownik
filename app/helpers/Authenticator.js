import Connection from 'helpers/Connection';
import {
  isUserInStorage,
  isAdminInStorage,
  isRoleInStorage,
  removeHeadersFromStorage,
} from 'helpers/Headers';

const Authenticator = {
  login: (endpoint, credentials) => Connection.post(endpoint, credentials),
  logout: (endpoint) => Connection.delete(endpoint, {}).then(removeHeadersFromStorage),
  isAuthenticated: () => isUserInStorage(),
  hasAccess: (role) => isRoleInStorage(role),
  isAuthenticatedAdmin: () => isAdminInStorage(),
};

export default Authenticator;
