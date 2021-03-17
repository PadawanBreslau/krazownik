/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function style(isChecked, small){
  if(isChecked && small){
    return(styles.smallCheckedButton);
  }
  else if(isChecked && !small){
    return(styles.checkedButton);
  }
  else if(!isChecked && small){
    return(styles.smallButton);
  }
  else{
    return(styles.button);
  }
}

function Button(props) {
  return (
    <div
      className={`${style(props.isChecked, props.small)} ${props.className} ${props.icon ? styles['button--icon'] : ''}`}
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
