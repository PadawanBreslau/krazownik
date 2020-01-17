/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Toggle
 *
 */

import React from 'react';
import { Tooltip } from 'react-tippy';

import InfoIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/info.svg';
import styles from './styles.scss';

function Toggle(field) {
  return (
    <div className={styles['toggle-wrapper']}>
      <label
        htmlFor={field.input.name}
        className={`${!field.input.value ? styles['toggle-active'] : ''} ${styles['toggle-label']}`}
      >
        Open profile
      </label>
      <input
        {...field.input}
        type="checkbox"
        className={`${styles.toggle} ${styles['toggle-light']}`}
        id={field.input.name}
        checked={field.input.value}
      />
      <label htmlFor={field.input.name} className={styles['toggle-btn']} />
      <label
        htmlFor={field.input.name}
        className={`${field.input.value ? styles['toggle-active'] : ''} ${styles['toggle-label']}`}
      >
        Private profile
      </label>
      <Tooltip
        title="Welcome to React"
        position="right-start"
        arrow="true"
        theme="light"
        html={field.tooltipText}
        className={styles.tooltip}
      >
        <InfoIcon className={styles.icon} />
      </Tooltip>
    </div>
  );
}

Toggle.propTypes = {};

export default Toggle;
