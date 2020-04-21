import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import MessageBox from 'components/MessageBox';
import Topnav from 'components/Topnav';
import logo from 'images/krazownik.png';
import styles from './styles.scss';
import { getFromStorage } from 'helpers/Headers';

class LayoutSimplified extends React.Component {
  render() {
    const { onLogout } = this.props;
    const userName = getFromStorage('name');
    return (
      <>
        <MessageBox />
        <div className={styles.simpleWrapper}>
          <div className={styles.header}>
            <Topnav userName={userName} onLogout={onLogout} />
          </div>
          {this.props.ui.loading && <Loader />}
          <a href="https://www.krazownik.pl/">
            <img src={logo} className={styles.simpleLogo} />
          </a>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}

LayoutSimplified.propTypes = {
  children: PropTypes.node,
  ui: PropTypes.object,
};

export default LayoutSimplified;
