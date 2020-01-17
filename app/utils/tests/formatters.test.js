import { fromJS } from 'immutable';
import {
  prepareEndpoint,
  salaryFormatter,
  urlFormatter,
  prepareTagSelectOption,
  prepareTagSelectOptionWithIds,
  cleanString,
  prepareSelectedValue,
  unionArray,
} from '../formatters';

describe('prepareEndpoint', () => {
  it('should prepare endpoint based on pattern', () => {
    const pattern = '/search/:id';
    const props = {
      match: {
        params: {
          id: 12,
        },
      },
    };

    expect(prepareEndpoint(pattern, props)).toEqual('/search/12');
  });
});

describe('salaryFormatter', () => {
  it('should return number formatted as currency', () => {
    expect(salaryFormatter(10000)).toEqual('£10,000');
  });

  it('should return null when argument is empty', () => {
    expect(salaryFormatter()).toEqual(null);
  });
});

describe('urlFormatter', () => {
  it('should return url without http protocol', () => {
    expect(urlFormatter('https://www.kandidate.com')).toEqual('www.kandidate.com');
  });
});

describe('prepareTagSelectOption', () => {
  it('should change array into array of objects with value and label keys', () => {
    expect(prepareTagSelectOption(['job', 'sales'])).toEqual([
      { value: 'job', label: 'job' },
      { value: 'sales', label: 'sales' },
    ]);
  });
});

describe('prepareTagSelectOptionWithIds', () => {
  it('should map array into array of objects with value and label keys', () => {
    const inputArray = [{ id: '1', title: 'job' }, { id: '2', title: 'sales' }];

    expect(prepareTagSelectOptionWithIds(inputArray)).toEqual([
      { value: '1', label: 'job' },
      { value: '2', label: 'sales' },
    ]);
  });
});

describe('cleanString', () => {
  it('should remove semicolons and commas from the end of the string', () => {
    expect(cleanString('sales option;')).toEqual('sales option');
  });
});

describe('prepareSelectedValue', () => {
  it('should return object with value and id keys based on id', () => {
    const options = [{ id: 1, title: 'job' }, { id: 2, title: 'sales' }];
    expect(prepareSelectedValue(options, 1)).toEqual({ value: 1, label: 'job' });
  });

  it('should return empty object when no arguments passed', () => {
    expect(prepareSelectedValue()).toEqual({});
  });
});

describe('unionArray', () => {
  it('should merge two immutable List without duplication', () => {
    const starredCandiates = fromJS([
      { id: 234, type: 'star', label: 'new' },
      { id: 257, type: 'star', label: 'old' },
    ]);
    const starredCandidatesNew = fromJS([
      { id: 215, type: 'star', label: 'marketer' },
      { id: 234, type: 'star', label: 'new' },
      { id: 280, type: 'star', label: 'fixer' },
    ]);

    const result = fromJS([
      { id: 234, type: 'star', label: 'new' },
      { id: 257, type: 'star', label: 'old' },
      { id: 215, type: 'star', label: 'marketer' },
      { id: 280, type: 'star', label: 'fixer' },
    ]);

    expect(unionArray(starredCandiates, starredCandidatesNew)).toEqual(result);
  });
});
