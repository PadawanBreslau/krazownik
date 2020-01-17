import stylesColor from 'styles/shared/_colors.scss';
import variables from 'styles/shared/_variables.scss';

export const tagSelectStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'transparent',
    padding: '0 .125rem',
    border: isFocused
      ? `1px solid ${stylesColor.formFocusBorderColor}`
      : `1px solid ${stylesColor.formBorderColor}`,
    boxShadow: isFocused ? variables.inputBoxShadow : 'none',
    outline: 'none',
    minHeight: '2.5rem',
    fontSize: '.875rem',
  }),
  option: (styles, { isDisabled }) => ({
    ...styles,
    color: stylesColor.formHintColor,
    cursor: isDisabled ? 'not-allowed' : 'default',
    fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: '300',
    fontSize: '.875rem',
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: stylesColor.formHintColor,
    fontSize: '.875rem',
    fontWeight: '300',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: stylesColor.formHintColor,
    ':hover': {
      color: 'white',
    },
  }),
  placeholder: (styles) => ({ ...styles, color: stylesColor.formHintColor, marginLeft: '.625rem' }),
  dropdownIndicator: (styles) => ({ ...styles, display: 'none' }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
  clearIndicator: (styles) => ({ ...styles, padding: '.3125rem' }),
  multiValue: (styles) => ({
    ...styles,
    padding: '.1875rem .3125rem',
    borderRadius: '5px',
    backgroundColor: '#DDDFE8',
    fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  }),
  valueContainer: (styles) => ({ ...styles, padding: '0' }),
  input: (styles) => ({
    ...styles,
    margin: '0 .125rem',
    padding: '0 .5rem',
    fontSize: '1rem',
    ':focus': { boxShadow: 'none' },
  }),
  singleValue: (styles) => ({ ...styles, margin: 0 }),
};

export const singleSelectStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: 'transparent',
    padding: '0 .125rem',
    border: isFocused
      ? `1px solid ${stylesColor.formFocusBorderColor}`
      : `1px solid ${stylesColor.formBorderColor}`,
    boxShadow: isFocused ? variables.inputBoxShadow : 'none',
    outline: 'none',
    minHeight: '2.5rem',
    fontSize: '.875rem',
  }),
  option: (styles, { isDisabled }) => ({
    ...styles,
    color: stylesColor.formHintColor,
    cursor: isDisabled ? 'not-allowed' : 'default',
    fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    '&:empty': {
      padding: '0',
    },
  }),
  placeholder: (styles) => ({ ...styles, color: stylesColor.formHintColor }),
  dropdownIndicator: (styles) => ({ ...styles, display: 'none' }),
  indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
  clearIndicator: (styles) => ({ ...styles, padding: '.3125rem' }),
  valueContainer: (styles) => ({ ...styles, padding: '.625rem' }),
  input: (styles) => ({ ...styles, margin: '0', padding: '0', ':focus': { boxShadow: 'none' } }),
  singleValue: (styles) => ({ ...styles, margin: 0 }),
};

export const parser = (value) => value.map((item) => item.value).join('; ');

export const formater = (value) => {
  if (!value) return [];
  return value.split('; ').reduce((result, item) => {
    if (item.length) result.push({ value: item, label: item });
    return result;
  }, []);
};

export const singleParser = (val) => val && val.value;
