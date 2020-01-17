/**
 *
 * CheckboxGroup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import styles from './styles.scss';

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    this.expandList = this.expandList.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  expandList() {
    this.setState({
      expanded: true,
    });
  }

  toggleAll(event) {
    const { change, options, allFieldName } = this.props;
    const allValues = options.map((item) => item.value);

    if (event.target.checked) {
      change(allFieldName, allValues);
    } else {
      change(allFieldName, []);
    }
  }

  field = ({ input, meta, options, disabled, className, allFieldName, change }) => {
    const { name, onChange } = input;
    const { touched, error } = meta;
    const inputValue = input.value;
    const checkboxStyle = this.props.theme || styles;

    const checkboxes = options.map(({ label, value }, index) => {
      const handleChange = (event) => {
        const arr = [...inputValue];

        if (event.target.checked) {
          arr.push(value);
        } else {
          arr.splice(arr.indexOf(value), 1);
        }

        return onChange(arr);
      };
      const checked = inputValue.includes(value);
      if (inputValue.includes('All') && change)
        change(allFieldName, options.map((item) => item.value));

      return (
        <li key={value} className={checkboxStyle['input-wrapper']}>
          <input
            type="checkbox"
            className={checkboxStyle.input}
            checked={checked}
            id={`${name}[${index}]`}
            name={`${name}[${index}]`}
            value={value}
            onChange={handleChange}
            disabled={disabled}
          />
          <label className={checkboxStyle.label} htmlFor={`${name}[${index}]`}>
            {label}
          </label>
        </li>
      );
    });

    return (
      <div>
        <ul className={className}>
          {allFieldName && (
            <li className={checkboxStyle['input-wrapper']}>
              <input
                type="checkbox"
                className={checkboxStyle.input}
                checked={inputValue.length === options.length || inputValue.includes('All')}
                id={`${name}all`}
                name={`${name}all`}
                value="All"
                onChange={(e) => this.toggleAll(e)}
                disabled={disabled}
              />
              <label className={checkboxStyle.label} htmlFor={`${name}all`}>
                All
              </label>
            </li>
          )}
          {checkboxes}
        </ul>
        {options.length > 5 &&
          this.props.expandable &&
          !this.state.expanded && (
            <button type="button" className={styles.moreButton} onClick={this.expandList}>
              more...
            </button>
          )}
        {touched && error && <p className="error">{error}</p>}
      </div>
    );
  };

  render() {
    const groupClass = this.props.expandable && !this.state.expanded && styles['group--collapsed'];
    return (
      <Field
        {...this.props}
        type="checkbox"
        component={this.field}
        className={`${styles.group} ${groupClass}`}
      />
    );
  }
}

CheckboxGroup.propTypes = {
  theme: PropTypes.object,
  expandable: PropTypes.bool,
  allFieldName: PropTypes.string,
  change: PropTypes.func,
  options: PropTypes.array,
};

export default CheckboxGroup;
