import Connection from 'helpers/Connection';
import handleAnalitics from 'helpers/Analitics';
import { ROLES } from 'rolesConstants';

jest.mock('helpers/Connection');
const event = { stopPropagation: jest.fn() };

describe('handleAnalitics', () => {
  it('should not pass click types for Admin user', () => {
    localStorage.setItem('user-role', ROLES.admin);
    handleAnalitics(event, 2, 'email');
    expect(Connection.post).not.toHaveBeenCalled();
  });

  it('should pass click type for company user', () => {
    localStorage.setItem('user-role', ROLES.company);
    handleAnalitics(event, 2, 'cv');
    expect(Connection.post).toHaveBeenCalledWith('/clicks', {
      data: { attributes: { candidateId: 2, clickType: 'cv' } },
    });
  });

  it('should pass click type email for TA user', () => {
    localStorage.setItem('user-role', ROLES.talentAdvocate);
    handleAnalitics(event, 2, 'email');
    expect(Connection.post).toHaveBeenCalledWith('/clicks', {
      data: { attributes: { candidateId: 2, clickType: 'email' } },
    });
  });

  it('should pass click type email for sourcer user', () => {
    localStorage.setItem('user-role', ROLES.sourcer);
    handleAnalitics(event, 2, 'email');
    expect(Connection.post).toHaveBeenCalledWith('/clicks', {
      data: { attributes: { candidateId: 2, clickType: 'email' } },
    });
  });
});
