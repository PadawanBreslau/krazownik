import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import MessageBox from 'components/MessageBox';
import Topnav from 'components/Topnav';
import { getFromStorage } from 'helpers/Headers';
import styles from './styles.scss';

/* eslint-disable react/prefer-stateless-function */
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
          <div className={styles.content}>{this.props.children}</div>
        </div>
      </>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */

LayoutSimplified.propTypes = {
  onLogout: PropTypes.func,
  children: PropTypes.node,
  ui: PropTypes.object,
};

export default LayoutSimplified;
