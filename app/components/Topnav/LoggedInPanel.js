import React from 'react';
import PropTypes from 'prop-types';
import withAuthentication from 'hoc/authHOC';
import { Link } from 'react-router-dom'
import styles from './styles.scss';

@withAuthentication()
export class LoggedInPanel extends React.PureComponent {
  render() {
    const {onLogout} = this.props;
    return (
      <div className={styles.buttons}>
        <Link to= '/panel'><div className={styles.darkButton}>PANEL</div></Link>
        <Link to='/files'><div className={styles.darkButton}>DODAJ PLIKI</div></Link>
        <button className={styles.logout} onClick={onLogout}>WYLOGUJ&nbsp;SIĘ</button>
      </div>
    );
  }
};

  LoggedInPanel.propTypes = {
    onLogout: PropTypes.func,
  };

  export default LoggedInPanel;