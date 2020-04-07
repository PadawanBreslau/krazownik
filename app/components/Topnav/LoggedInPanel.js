import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const LoggedInPanel = () => (
  <div className={styles.buttons}>
    <div className={styles.button}>Prześlij Pliki</div>
    <div className={styles.button}>Wyloguj się</div>
  </div>
);

export default LoggedInPanel;