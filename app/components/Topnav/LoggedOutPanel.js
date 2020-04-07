import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const LoggedOutPanel = () => (
  <div className={styles.buttons}>
    <Link to={'/login'}  className={styles.button}>ZALOGUJ SIĘ</Link>
    <Link to={'/register'} className={styles.button}>ZAREJESTRUJ SIĘ</Link>
  </div>
);

export default LoggedOutPanel;