import React from 'react';
import styles from './styles.scss';

const Logo = ({ image, url, alt }) => (
  <div className={styles.psLogo}>
    <a href={url} target="_blank">
      <img src={image} alt={alt} width="160" />
    </a>
  </div>
);

export default Logo;