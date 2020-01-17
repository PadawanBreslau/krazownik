/**
 *
 * SelectField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import styles from './styles.scss';

const renderField = ({
  input,
  label,
  type,
  className,
  disabled,
  meta: { error },
  children,
  autoFocus,
  onFieldChange,
}) => (
  <div className={styles.wrapper}>
    <select
      {...input}
      placeholder={label}
      type={type}
      className={`${className} ${error ? styles.inputError : ''}`}
      disabled={disabled}
      autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
      onChange={(e) => {
        input.onChange(e);
        if (onFieldChange) onFieldChange();
      }}
    >
      {children}
    </select>
    {error && <span className={styles.fieldError}>{error}</span>}
  </div>
);

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  autoFocus: PropTypes.bool,
  onFieldChange: PropTypes.func,
  children: PropTypes.node,
};

function SelectField(props) {
  const {
    fieldName,
    label,
    placeholder,
    className,
    disabled,
    type,
    validate,
    autoFocus,
    onFieldChange,
  } = props;

  return (
    <div className={`${className} ${styles.input}`}>
      {label && (
        <label className={styles.label} htmlFor={fieldName}>
          {label}
        </label>
      )}
      <Field
        component={renderField}
        type={type}
        placeholder={placeholder}
        name={fieldName}
        id={`input.${fieldName}`}
        disabled={disabled}
        validate={validate}
        autoFocus={autoFocus}
        onFieldChange={onFieldChange}
      >
        {props.children}
      </Field>
    </div>
  );
}

SelectField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  autoFocus: PropTypes.bool,
  validate: PropTypes.func,
  onFieldChange: PropTypes.func,
};

export default SelectField;
