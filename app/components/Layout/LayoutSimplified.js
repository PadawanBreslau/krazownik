import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import logo from 'images/logo.png';
import styles from './styles.scss';

function LayoutSimplified(props) {
  return (
    <div className={styles.simpleWrapper}>
      {props.ui.loading && <Loader />}
      <a href="https://www.krazownik.pl/">
        <img src={logo} className={styles.simpleLogo}/>
      </a>
      {props.children}
    </div>
  );
}

LayoutSimplified.propTypes = {
  children: PropTypes.node,
  ui: PropTypes.object,
};

export default LayoutSimplified;
