export function required(value) {
  if (value) return null;
  return 'field required';
}
// TODO: remove such custom validators and use generic from helpers/validators

export default function performValidation(values, validators) {
  const errors = {};
  Object.keys(validators).forEach((key) => {
    if (validators[key]) {
      validators[key].forEach((validator) => {
        const error = validator(values[key]);
        if (error) errors[key] = error;
      });
    }
  });
  return errors;
}

export function validateNumericValues(value) {
  if (/\d/.test(value)) {
    return 'Numeric values are not allowed';
  }
  return undefined;
}
