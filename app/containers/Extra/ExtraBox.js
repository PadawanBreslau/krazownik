import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const ExtraBox = ({name, icon, url}) => (
  <Link to={`/${url}`}>
    <div className={styles.box}>
      <p className={styles.label}>{name}</p>
        <div className={styles.iconBox}>{icon}</div> 
    </div>
  </Link>
);

export default ExtraBox;