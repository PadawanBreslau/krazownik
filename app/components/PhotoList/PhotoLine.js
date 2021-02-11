import React from 'react';
import PropTypes from 'prop-types';
import config from 'config';
import styles from './styles.scss';

const PhotoLine = ({ photo }) => (
  <div className={styles.photo}>
    <img src={config.api.url + photo.thumb} />
  </div>
);

PhotoLine.propTypes = {
  photo: PropTypes.object,
};

export default PhotoLine;
