/**
 *
 * LayoutNavbar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Topnav from 'components/Topnav';
import Loader from 'components/Loader';
import MessageBox from 'components/MessageBox';
import { getFromStorage } from 'helpers/Headers';
import { withApiRead } from 'hoc/apiHOC';
import styles from './styles.scss';

@withApiRead({
  storeName: 'SearchesStats',
  api: {
    get: '/companies/stats',
  },
})
class LayoutNavbar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const userName = getFromStorage('name') || '';
    const userRole = getFromStorage('user-role') || '';
    const { ui, children, dispatch } = this.props;

    return (
      <div className={styles.layout}>
        <div className={styles.container}>
          {!ui.modal.visible && <MessageBox dispatch={dispatch} global />}
          <Topnav {...this.props} userName={userName} userRole={userRole} />
          <div className={styles.wrapperNavigation}>
            <main className={`${styles.main} ${styles.mainNavigation}`}>
              {ui.loading && <Loader />}
              <div className={styles.wrapper}>{children}</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

LayoutNavbar.propTypes = {
  children: PropTypes.node.isRequired,
  ui: PropTypes.object,
  dispatch: PropTypes.func,
};

export default LayoutNavbar;
