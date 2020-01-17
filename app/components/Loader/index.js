/**
 *
 * Loader
 *
 */

import React from 'react';
import LoaderIcon from '-!babel-loader!svg-react-loader?name=ExitIcon!./loader.svg';
import styles from './styles.scss';

function Loader() {
  return (
    <div className={styles.loader}>
      <LoaderIcon className={styles.icon} />
    </div>
  );
}

Loader.propTypes = {};

export default Loader;
