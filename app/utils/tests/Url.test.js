import { push } from 'react-router-redux';
import { prepareEndpoint, redirect } from '../Url';

describe('prepareEndpoint', () => {
  it('should prepare endpoint based on provided pattern', () => {
    const pattern = '/candidates/:id';
    const props = {
      match: {
        params: {
          id: 12,
        },
      },
    };

    expect(prepareEndpoint(pattern, props)).toEqual('/candidates/12');
  });

  it('should prepare endpoint based on provided pattern with search', () => {
    const pattern = '/candidates/:id/?search';
    const props = {
      match: {
        params: {
          id: 12,
        },
      },
      location: {
        search: '?page=2',
      },
    };

    expect(prepareEndpoint(pattern, props)).toEqual('/candidates/12?page=2');
  });
});

describe('redirect', () => {
  it('should add redirectTo to callbacks', () => {
    expect(redirect('/')).toEqual(push('/'));
  });

  it('should use location as callbacks', () => {
    const location = {
      state: {
        from: {
          pathname: '/candidates',
        },
      },
    };
    expect(redirect('/', location)).toEqual(push('/candidates'));
  });
});
