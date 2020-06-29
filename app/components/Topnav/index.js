import React from 'react';
import PropTypes from 'prop-types';
import TopnavMenu from './TopnavMenu';
import LoggedInPanel from './LoggedInPanel';
import LoggedOutPanel from './LoggedOutPanel';
import styles from './styles.scss';

const Topnav = (props) => (
  <nav className={styles.topnav}>
    <TopnavMenu />
    {props.userName ? <LoggedInPanel onLogout={props.onLogout} /> : <LoggedOutPanel />}
  </nav>
);

Topnav.propTypes = {
  userName: PropTypes.string,
  onLogout: PropTypes.func,
};

export default Topnav;
