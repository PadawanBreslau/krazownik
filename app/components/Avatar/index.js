/**
 *
 * Avatar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import UserIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/user.svg';
import styles from './styles.scss';

function Avatar({ imgSrc, citizenship, size, outdated, preview }) {
  return (
    <div className={`${styles.avatar} ${size ? styles[`avatar--${size}`] : ''}`}>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt="candidate"
          className={`media-image ${styles.picture} ${outdated && styles['picture--old']}`}
        />
      ) : (
        <div className={`${styles.placeholder} ${size ? styles[`placeholder--${size}`] : ''}`}>
          <UserIcon />
        </div>
      )}
      {citizenship === 'non-EU' && !preview && <div className={styles.tag}>Non-EU</div>}
    </div>
  );
}

Avatar.propTypes = {
  imgSrc: PropTypes.string,
  citizenship: PropTypes.string,
  size: PropTypes.string,
  outdated: PropTypes.bool,
  preview: PropTypes.bool,
};

export default Avatar;
