import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Home from '-!babel-loader!svg-react-loader?name=LogoutIcon!images/icons/home.svg';
import styles from './styles.scss';

const TopnavMenu = () => (
  <div className={styles.menu}>
    <div className={styles.menuItem}>
      <Link to="/" className={styles.logo}>
        <Home />
      </Link>
    </div>
    <div className={styles.menuItem}>
      <Link to="/events" className={styles.link}>
        INFO
      </Link>
    </div>
    <div className={styles.menuItem}>
      <Link to="/bonus_points"  className={styles.link}>
        MAPA
      </Link>
    </div>
    <div className={styles.menuItem}>
      <Link to="/challenges"  className={styles.link}>
        WYZWANIA
      </Link>
    </div>
    <div className={styles.menuItem}>
      <Link to="/riddles"  className={styles.link}>
        ZAGADKI
      </Link>
    </div>
    <div className={styles.menuItem}>
      <Link to="/teams"  className={styles.link}>
        DRUŻYNY
      </Link>
    </div>
    <div className={styles.menuItem}>
      <Link to="/photos"  className={styles.link}>
        ZDJECIA
      </Link>
    </div>
    <div className={styles.menuItem}>
      <Link to="/contact"  className={styles.link}>
        KONTAKT
      </Link>
    </div>
  </div>

);

export default TopnavMenu;
