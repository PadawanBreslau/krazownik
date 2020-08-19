import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const ExtraBox = ({ name, icon, url }) => (
  <Link to={`/${url}`}>
    <div className={styles.box}>
      <p className={styles.label}>{name}</p>
      <div className={styles.iconBox}>{icon}</div>
    </div>
  </Link>
);

ExtraBox.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.object,
  url: PropTypes.string,
};

export default ExtraBox;
