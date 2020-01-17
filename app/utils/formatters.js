import { fromJS } from 'immutable';

export function prepareEndpoint(pattern, props) {
  const params = props && props.match ? props.match.params : '';
  const patternWithParams = pattern.replace(/:[^\s/]+/g, (arg) => params[arg.replace(':', '')]);
  return patternWithParams;
}

export function salaryFormatter(num) {
  if (!num) return null;
  const formater = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
  });

  return formater.format(num);
}

export function urlFormatter(url) {
  return url.replace(/^https?:\/\//i, '');
}

export function prepareTagSelectOption(optionArray) {
  return optionArray.map((value) => ({ value, label: value }));
}

export function prepareTagSelectOptionWithIds(optionArray) {
  return optionArray.map((value) => ({ value: value.id, label: value.title }));
}

export function cleanString(string) {
  return string.replace(/[,;]$/, '').trim();
}

export function prepareSelectedValue(options, id) {
  let selectedValue;

  if (id && options) {
    selectedValue = options.find((attribute) => parseInt(attribute.id, 10) === id);
  }

  return selectedValue ? { value: id, label: selectedValue.title } : {};
}

export function unionArray(left, right) {
  const leftArray = Array.isArray(left) ? fromJS(left) : left;
  const result = leftArray.concat(right.filter((item) => leftArray.indexOf(item) < 0));

  return result;
}
