/**
 *
 * Topnav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LogoutIcon from '-!babel-loader!svg-react-loader?name=LogoutIcon!images/icons/logout.svg';
import Logo from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/logo.svg';
import styles from './styles.scss';

const Topnav = (props) => (
  <nav className={styles.topnav}>
    <div className={styles.topnavBrand}>
      <Link to="/" className={styles.logo}>
        <Logo />
      </Link>
    </div>
    <div className={styles.topnavUser}>
        <div className={styles['user-details']}>
          {props.userName}
          <button type="button" className={styles['logout-button']} onClick={props.onLogout}>
            <LogoutIcon />
          </button>
        </div>
      )
    </div>
  </nav>
);

Topnav.propTypes = {
  userName: PropTypes.string,
  onLogout: PropTypes.func,
};

export default Topnav;
