/**
 *
 * DatePickerField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Tooltip } from 'react-tippy';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';
import CalendarIcon from '-!babel-loader!svg-react-loader?name=ExitIcon!./calendar.svg';
import InfoIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/info.svg';
import styles from './styles.scss';

function DatePicker(field) {
  const disabledDates = field.disablePastDate ? { disabledDays: { before: new Date() } } : {};
  const handleDayChange = (selectedDay) => {
    field.input.onChange(formatDate(selectedDay));
    if (field.onFieldChange) field.onFieldChange();
  };

  return (
    <DayPickerInput
      inputProps={{ ...field.input }}
      formatDate={formatDate}
      parseDate={parseDate}
      format="MM/D/YYYY"
      placeholder={`${formatDate(new Date())}`}
      dayPickerProps={disabledDates}
      onDayChange={handleDayChange}
    />
  );
}

function DatePickerField(props) {
  const {
    fieldName,
    label,
    placeholder,
    className,
    disabled,
    disablePastDate,
    tooltipText,
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
              <InfoIcon className={styles.infoIcon} />
            </Tooltip>
          )}
        </label>
      )}
      <div className={styles.wrapper}>
        <Field
          component={DatePicker}
          type="date"
          placeholder={placeholder}
          name={fieldName}
          id={`input.${fieldName}`}
          disabled={disabled}
          disablePastDate={disablePastDate}
          onFieldChange={onFieldChange}
        />
        <CalendarIcon className={styles.icon} />
      </div>
    </div>
  );
}

DatePickerField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disablePastDate: PropTypes.bool,
  tooltipText: PropTypes.node,
  onFieldChange: PropTypes.func,
};

export default DatePickerField;
