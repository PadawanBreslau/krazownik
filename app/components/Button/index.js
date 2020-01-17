/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function Button(props) {
  return (
    <div
      className={`${styles.button} ${props.className} ${props.icon ? styles['button--icon'] : ''}`}
    >
      {props.children}
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.bool,
};

export default Button;
