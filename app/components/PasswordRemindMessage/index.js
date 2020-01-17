import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const PasswordRemindMessage = (props) => {
  const { message } = props;
  return <div className={styles.holder}>{message}</div>;
};

PasswordRemindMessage.propTypes = {
  message: PropTypes.string,
};

export default PasswordRemindMessage;
