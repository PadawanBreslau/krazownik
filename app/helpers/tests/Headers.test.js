import { setHeadersFromQuery, isRoleInStorage, isAdminInStorage } from 'helpers/Headers';

describe('Headers', () => {
  it('should check if authenticated', () => {
    setHeadersFromQuery('Access-Token=something&Uid=something-else&Weird-Header=other');

    expect(localStorage.getItem('Access-Token')).toEqual('something');
  });
});

describe('isRoleInStorage', () => {
  it('should check if passed role is in Store', () => {
    setHeadersFromQuery('Access-Token=something&Uid=something-else&Weird-Header=other');

    expect(isRoleInStorage('Company')).toEqual(false);
  });
});

describe('isAdminInStorage', () => {
  it('should check if passed role is in Store', () => {
    setHeadersFromQuery(
      'Access-Token=something&Uid=something-else&Weird-Header=other&isAdmin=true',
    );

    expect(isAdminInStorage()).toEqual(true);
  });
});
