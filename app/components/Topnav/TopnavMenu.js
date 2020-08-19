import React from 'react';
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
    <div className={styles.menuLabel}>Krążownik</div>
  </div>
);

export default TopnavMenu;
