import { isEnhancedUser, isTalentAdvocateOrSourcer, isCompany } from '../User';

describe('isEnhancedUser', () => {
  it('should return false when no user role in storage', () => {
    expect(isEnhancedUser()).toEqual(false);
  });

  it('should return true if user is Admin', () => {
    localStorage.setItem('user-role', 'Admin');
    expect(isEnhancedUser()).toEqual(true);
  });

  it('should return true if user is TalentAdvocate', () => {
    localStorage.setItem('user-role', 'TalentAdvocate');
    expect(isEnhancedUser()).toEqual(true);
  });

  it('should return true if user is Sourcer', () => {
    localStorage.setItem('user-role', 'Sourcer');
    expect(isEnhancedUser()).toEqual(true);
  });

  it('should return false if user is Company', () => {
    localStorage.setItem('user-role', 'Company');
    expect(isEnhancedUser()).toEqual(false);
  });
});

describe('isTalentAdvocateOrSourcer', () => {
  it('should return false when no user role in storage', () => {
    expect(isTalentAdvocateOrSourcer()).toEqual(false);
  });

  it('should return true if user is Talent Advocate', () => {
    localStorage.setItem('user-role', 'TalentAdvocate');
    expect(isTalentAdvocateOrSourcer()).toEqual(true);
  });

  it('should return true if user is Admin', () => {
    localStorage.setItem('user-role', 'Sourcer');
    expect(isTalentAdvocateOrSourcer()).toEqual(true);
  });

  it('should return false if user is Admin', () => {
    localStorage.setItem('user-role', 'Admin');
    expect(isTalentAdvocateOrSourcer()).toEqual(false);
  });

  it('should return true if proper user_role is passed into function', () => {
    expect(isTalentAdvocateOrSourcer('Sourcer')).toEqual(true);
  });
});

describe('isCompany', () => {
  it('should return false when no user role in storage', () => {
    expect(isCompany()).toEqual(false);
  });

  it('should return true if user is Admin', () => {
    localStorage.setItem('user-role', 'Company');
    expect(isCompany()).toEqual(true);
  });

  it('should return false if user is not a company', () => {
    localStorage.setItem('user-role', 'Admin');
    expect(isCompany()).toEqual(false);
  });

  it('should return true if proper user_role is passed into function', () => {
    expect(isCompany('Company')).toEqual(true);
  });
});
