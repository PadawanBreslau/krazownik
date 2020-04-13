/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withApiRead } from 'hoc/apiHOC';
import styles from './styles.scss';

@withApiRead({
  storeName: 'SearchesStats',
  api: {
    get: '/',
  },
})
class Layout extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.container}>

        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  ui: PropTypes.object,
  navigation: PropTypes.string,
  dispatch: PropTypes.func,
  data: PropTypes.object,
};

export default Layout;
