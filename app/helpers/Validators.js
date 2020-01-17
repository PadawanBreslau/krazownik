const validators = {
  required: (value) => (value ? undefined : 'Required'),
  requireWithMessage: (message) => (value) => (value ? undefined : message),
  requiredArray: (value) => (value && (value && value.length > 0) ? undefined : 'Required'),
  requiredImmutableList: (value) => (value && (value && value.size > 0) ? undefined : 'Required'),
  numberValidator: (value) =>
    value && Number.isNaN(Number(value)) ? 'Must be a number' : undefined,
  positiveNumber: (value) => (value && value < 0 ? 'Must be a positive number' : undefined),
  minMaxValue: (min, max) => (value) =>
    value && (value > max || value < min)
      ? `Please enter a number between ${min} and ${max}`
      : undefined,
  maxLength: (max) => (value) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined,
  email: (value) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address'
      : undefined,
  nameValidator: (value) =>
    value && !/^([^0-9@(){}[\]<>/\\*+/%/$#^!£?]*)$/.test(value)
      ? 'Only letters allowed'
      : undefined,
};

export default validators;
