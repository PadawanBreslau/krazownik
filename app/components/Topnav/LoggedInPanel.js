import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const LoggedInPanel = () => (
  <div className={styles.buttons}>
    <div className={styles.button}>PRZEŚLIJ&nbsp;PLIKI</div>
    <div className={styles.button}>WYLOGUJ&nbsp;SIĘ</div>
  </div>
);

export default LoggedInPanel;