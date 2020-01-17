import { push } from 'react-router-redux';
import {
  prepareEndpoint,
  prepareSearchEndpoint,
  prepareFiltersEndpoint,
  preparePaginatedFiltersEndpoint,
  redirect,
  prepareUtmSearchParams,
} from '../Url';

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
});

describe('prepareSearchEndpoint', () => {
  it('should prepare endpoint with search', () => {
    const endpoint = '/candidates';
    const payload = {
      search: 'John',
    };

    expect(prepareSearchEndpoint(endpoint, payload)).toEqual('/candidates?keyword=John');
  });
});

describe('prepareFiltersEndpoint', () => {
  it('should prepare endpoint based on filters', () => {
    const endpoint = '/candidates';
    const payload = {
      query: 'John',
      sort: 'desc',
      filters: {
        subSector: 'Sale',
      },
    };

    expect(prepareFiltersEndpoint(endpoint, payload)).toEqual(
      '/candidates?query=John&filter%5Bsub_sector%5D=Sale&sort=desc',
    );
  });
});

describe('preparePaginatedFiltersEndpoint', () => {
  it('should prepare endpoint with pagination', () => {
    const endpoint = '/candidates';
    const payload = {};
    const page = 2;

    expect(preparePaginatedFiltersEndpoint(endpoint, payload, page)).toEqual('/candidates?&page=2');
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

describe('prepareUtmSearchParams', () => {
  it('should create string with UTM params', () => {
    const data = {
      source: 'google',
      utmPlacement: 'footer',
      referrer: 'asdkjlhl.asdas.iii',
      email: 'admin@example.com',
    };
    expect(prepareUtmSearchParams(data)).toEqual(
      '?source=google&referrer=asdkjlhl.asdas.iii&utm_placement=footer',
    );
  });
});
