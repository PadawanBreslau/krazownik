/**
 *
 * FormField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import { Tooltip } from 'react-tippy';

import InfoIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/info.svg';
import styles from './styles.scss';

const renderField = (props) => {
  const {
    input,
    label,
    type,
    className,
    placeholder,
    disabled,
    filterField,
    min,
    meta: { error, invalid, touched },
    onFieldChange,
  } = props;

  const FieldComponent = type === 'textarea' ? type : 'input';

  return (
    <div className={`${type === 'textarea' ? styles.textareaWrapper : ''}`}>
      <FieldComponent
        {...input}
        placeholder={placeholder || label}
        type={type}
        className={`${className} ${touched && (error || invalid) ? styles.inputError : ''}`}
        disabled={disabled}
        min={min}
        onChange={(e) => {
          input.onChange(e);
          if (onFieldChange) onFieldChange();
        }}
      />
      {touched &&
        (error || invalid) && (
          <span className={`${styles.fieldError} ${filterField ? styles.fieldErrorFilter : ''}`}>
            {error}
          </span>
        )}
    </div>
  );
};

renderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  filterField: PropTypes.bool,
  min: PropTypes.number,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  onFieldChange: PropTypes.func,
};

function FormField(props) {
  const {
    fieldName,
    label,
    placeholder,
    className,
    children,
    disabled,
    filterField,
    min,
    type,
    tooltipText,
    validate,
    warn,
    onFieldChange,
  } = props;

  return (
    <div className={`${className} ${styles['input-wrapper']}`}>
      {label && (
        <label className={styles.label} htmlFor={fieldName}>
          <span>{label}</span>
          {tooltipText && (
            <Tooltip
              title="Sample text"
              position="right-start"
              arrow="true"
              theme="light"
              html={tooltipText}
              className={styles.tooltip}
            >
              <InfoIcon className={styles.icon} />
            </Tooltip>
          )}
        </label>
      )}
      {children && <span className={styles.inputIcon}>{children}</span>}
      {type === 'textarea' ? (
        <Field
          component={renderField}
          type={type}
          placeholder={placeholder}
          name={fieldName}
          id={`input.${fieldName}`}
          disabled={disabled}
          validate={validate}
          warn={warn}
          className={`${styles.textarea} ${children ? styles.hasIcon : ''}`}
        />
      ) : (
        <Field
          component={renderField}
          type={type}
          placeholder={placeholder}
          name={fieldName}
          id={`input.${fieldName}`}
          disabled={disabled}
          filterField={filterField}
          validate={validate}
          min={min}
          warn={warn}
          className={`${styles.input} ${children ? styles.hasIcon : ''}`}
          onFieldChange={onFieldChange}
        />
      )}
    </div>
  );
}

FormField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  filterField: PropTypes.bool,
  children: PropTypes.node,
  tooltipText: PropTypes.node,
  min: PropTypes.number,
  validate: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  warn: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
  onFieldChange: PropTypes.func,
};

export default FormField;
