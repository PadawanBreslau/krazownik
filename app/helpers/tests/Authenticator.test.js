import Authenticator from 'helpers/Authenticator';
import Connection from 'helpers/Connection';
jest.mock('helpers/Connection');

const exampleEndpoint = '/endpoint';
const exampleData = { email: 'test@example.com', password: 'password' };

describe('Authenticator', () => {
  it('should login', () => {
    Authenticator.login(exampleEndpoint, exampleData);
    expect(Connection.post).toHaveBeenCalledWith(exampleEndpoint, exampleData);
  });
  it('should logout', () => {
    Connection.delete.mockImplementation(() => new Promise(() => {}));
    Authenticator.logout(exampleEndpoint);
    expect(Connection.delete).toHaveBeenCalledWith(exampleEndpoint, {});
  });
  it('should check if authenticated', () => {
    expect(Authenticator.isAuthenticated()).toBe(false);
    localStorage.setItem('Access-Token', 'something');
    expect(Authenticator.isAuthenticated()).toBe(true);
  });
});
