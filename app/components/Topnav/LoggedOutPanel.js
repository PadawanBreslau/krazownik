import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const LoggedOutPanel = () => (
  <div className={styles.buttons}>
    <Link to={'/login'}  className={styles.button}>ZALOGUJ&nbsp;SIĘ</Link>
    <Link to={'/register'} className={styles.button}>ZAREJESTRUJ&nbsp;SIĘ</Link>
  </div>
);

export default LoggedOutPanel;