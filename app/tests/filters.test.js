import { FILTERS, CONDITIONS, generateConditions, translateFilter, findFilter } from '../filters';

describe('generateConditions', () => {
  it('should generate conditions for provided filter', () => {
    const result = generateConditions('sub_sector', FILTERS, CONDITIONS);

    expect(result).toEqual([
      'is',
      'is_not',
      'is_empty',
      'is_not_empty',
      'contains',
      'does_not_contain',
    ]);
  });
});

describe('translateFilter', () => {
  it('should generate filter translation', () => {
    const filter = {
      condition: 'contains',
      field: 'sub_sector',
      value: [
        'Sales, Accounts & Customer Success',
        'Marketing, Community & PR',
        'Operations, Strategy, Finance & Management',
      ],
    };
    const result = translateFilter(filter);

    expect(result).toEqual(
      'Sub sector contains: Sales, Accounts & Customer Success,Marketing, Community & PR,Operations, Strategy, Finance & Management',
    );
  });

  it('should generate filter translation without values', () => {
    const filter = {
      condition: 'contains',
      field: 'sub_sector',
    };
    const result = translateFilter(filter);

    expect(result).toEqual('Sub sector contains ');
  });
});

describe('findFilter', () => {
  it('should find filter by name', () => {
    const result = findFilter('sub_sector', FILTERS);

    expect(result).toEqual({
      name: 'sub_sector',
      condition: 'simple',
      values: [
        'Sales, Accounts & Customer Success',
        'Marketing, Community & PR',
        'Operations, Strategy, Finance & Management',
      ],
      type: 'radio',
    });
  });
});
