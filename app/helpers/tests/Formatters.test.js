import { camelize, snakize, regularCase } from '../Formatters';

describe('camelize', () => {
  it('should camelize object keys', () => {
    const props = {
      job_title: 'Sales manager',
      user_role: 'Active user',
    };

    expect(camelize(props)).toEqual({
      jobTitle: 'Sales manager',
      userRole: 'Active user',
    });
  });

  it('should not camelize array values', () => {
    const props = ['job-title', 'user-role'];

    expect(camelize(props)).toEqual(['job-title', 'user-role']);
  });
});

describe('snakize', () => {
  it('should snakize object keys', () => {
    const props = {
      jobTitle: 'Sales manager',
      userRole: 'Active user',
    };

    expect(snakize(props)).toEqual({
      job_title: 'Sales manager',
      user_role: 'Active user',
    });
  });
});

describe('regularCase', () => {
  it('should snakize object keys', () => {
    const props = 'salesAndMarketing';

    expect(regularCase(props)).toEqual('Sales and marketing');
  });
});
