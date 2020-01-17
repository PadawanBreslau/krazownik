import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import styles from './styles.scss';

const renderField = (args) => {
  const {
    input,
    label,
    type,
    className,
    meta: { touched, error },
    id,
  } = args;
  const showErrors = touched && error;
  return (
    <div>
      <div
        className={`${className} ${styles['input-wrapper']} ${showErrors ? styles.fieldError : ''}`}
      >
        <input
          {...input}
          type={type}
          id={id}
          className={`${styles.input} ${className} ${showErrors ? styles.inputError : ''}`}
        />
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        {showErrors && <span>{error}</span>}
      </div>
    </div>
  );
};
function CheckboxField(props) {
  const { fieldName, validate, className, disabled, children } = props;
  return (
    <Field
      component={renderField}
      type="checkbox"
      name={fieldName}
      label={children}
      id={`input.${fieldName}`}
      disabled={disabled}
      className={className}
      validate={validate}
    />
  );
}

CheckboxField.propTypes = {
  children: PropTypes.node,
  fieldName: PropTypes.string.isRequired,
  validate: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CheckboxField;
