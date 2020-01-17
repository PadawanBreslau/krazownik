import { regularCase } from 'utils/case';
import camelCase from 'lodash/camelCase';

export const FILTERS = [
  {
    name: 'qualification_status',
    condition: 'simplest',
    values: ['Qualified', 'Rejected'],
    type: 'radio',
  },
  {
    name: 'ideal_role',
    condition: 'simple',
    values: null,
    type: 'text',
  },
  {
    name: 'job_title',
    condition: 'simple',
    values: null,
    type: 'text',
  },
  {
    name: 'sub_sector',
    condition: 'simple',
    values: [
      'Sales, Accounts & Customer Success',
      'Marketing, Community & PR',
      'Operations, Strategy, Finance & Management',
    ],
    type: 'radio',
  },
  {
    name: 'ideal_role_tag_verified',
    condition: 'simple',
    values: [
      'Account Management (upselling)',
      'Account Executive (closing new deals)',
      'Customer Success',
      'Field Sales',
      'Partnerships',
      'Sales Development Representative',
      'Sales Team Management',
      'Sales Operations',
      'VP/ Director of Sales',
      'Inbound Sales',
      'Outbound Sales',
      'Both Inbound and/or Outbound Sales',
      'Unsure what this means',
      'Cold Calling',
      'Brand Marketing',
      'Community Management',
      'Content Marketing',
      'Conversion Optimisation',
      'CRM/ Email Marketing',
      'Demand Generation',
      'Paid Search/ Acquisition',
      'PR/ Communications',
      'Product Marketing',
      'SEO Manager',
      'VP/ Head of Marketing',
      'Business Analyst',
      'Business Intelligence',
      'Data Analyst',
      'General/ Country Manager',
      'Operations & Logistics',
      'COO / Head of Operations',
    ],
    type: 'radio',
  },
  {
    name: 'years_of_experience',
    condition: 'numeric',
    values: null,
    type: 'text',
  },
  {
    name: 'visa_type',
    condition: 'simple',
    values: ['Tier 1', 'Tier 2', 'Tier 3'],
    type: 'radio',
  },
  {
    name: 'visa_expiration_date',
    condition: 'date',
    values: null,
    type: 'date',
  },
  {
    name: 'salary_expectations_base',
    condition: 'numeric',
    values: null,
    type: 'text',
  },
  {
    name: 'salary_expectations_ote',
    condition: 'numeric',
    values: null,
    type: 'text',
  },
  {
    name: 'marketing_skills',
    condition: 'simple',
    values: [
      'Facebook',
      'Pinterest',
      'Instagram',
      'LinkedIn',
      'Mainly to a B2B audience',
      'Mainly to a B2C audience',
      'Both B2B and B2C',
      'Neither',
      'SaaS only',
      'FinTech only',
      'SaaS & FinTech',
      'Mobile App Marketing',
    ],
    type: 'radio',
  },
  {
    name: 'operations_skills',
    condition: 'simple',
    values: ['Advance Excel', 'SQL', 'VBA', 'Tableau', 'Google Analytics'],
    type: 'radio',
  },
  {
    name: 'sales_skills',
    condition: 'simple',
    values: ['SaaS Selling', 'Cold Calling'],
    type: 'radio',
  },
  {
    name: 'sales_deal_size',
    condition: 'numeric',
    values: null,
    type: 'text',
  },
  {
    name: 'org_name',
    condition: 'simple',
    values: null,
    type: 'text',
  },
  {
    name: 'job_summary',
    condition: 'simple',
    values: null,
    type: 'text',
  },
  {
    name: 'interested_locations',
    condition: 'simple',
    values: ['Berlin', 'Dublin', 'London', 'UK (non London)', 'Paris'],
    type: 'radio',
  },
  {
    name: 'native_language',
    condition: 'simple',
    values: null,
    type: 'text',
  },
  {
    name: 'citizenship',
    condition: 'simple',
    values: ['EU Citizen', 'UK Citizen', 'non-EU'],
    type: 'radio',
  },
  {
    name: 'content_piece',
    condition: 'simple',
    values: null,
    type: 'text',
  },
  {
    name: 'offers_start_date',
    condition: 'date',
    values: null,
    type: 'date',
  },
  {
    name: 'sign_up_date',
    condition: 'date',
    values: null,
    type: 'date',
  },
  {
    name: 'past_organisation',
    condition: 'simple',
    values: null,
    type: 'text',
  },
  {
    name: 'marketing_budget',
    condition: 'numeric',
    values: null,
    type: 'text',
  },
  {
    name: 'annual_sales_quota',
    condition: 'numeric',
    values: null,
    type: 'text',
  },
  {
    name: 'percentage_of_quota',
    condition: 'numeric',
    values: null,
    type: 'text',
  },
  {
    name: 'unwanted_companies',
    condition: 'simple',
    values: null,
    type: 'text',
  },
];

export const CONDITIONS = {
  simplest: ['is', 'is_not', 'is_empty', 'is_not_empty'],
  simple: ['is', 'is_not', 'is_empty', 'is_not_empty', 'contains', 'does_not_contain'],
  date: [
    'is',
    'is_not',
    'is_later_than',
    'is_earlier_than',
    'is_exactly_or_later_than',
    'is_exactly_or_earlier_than',
    'is_empty',
    'is_not_empty',
  ],
  numeric: [
    'is',
    'is_not',
    'is_more_than',
    'is_less_than',
    'is_more_or_equal_to',
    'is_less_or_equal_to',
    'is_empty',
    'is_not_empty',
  ],
};

export function generateConditions(fieldName, filters, conditions) {
  const filter = filters.find((item) => item.name === fieldName);

  return conditions[camelCase(filter.condition)];
}
export function translateFilter(filter) {
  return `${regularCase(filter.field)} ${regularCase(filter.condition).toLowerCase()}${
    filter.value ? ':' : ''
  } ${filter.value || ''}`;
}
export function findFilter(fieldName, filters) {
  return filters && filters.find((item) => item.name === fieldName);
}
