import React from 'react';
import PropTypes from 'prop-types';
import PhotoLine from './PhotoLine';
import styles from './styles.scss';

const PhotoList = ({ media }) => (
  <>
  <h1>Photo</h1>
  <div className={styles.photos}>
    {media.map((photo) => (
        <PhotoLine photo={photo} />
    ))}
  </div>
  </>
);

PhotoList.propTypes = {
  files: PropTypes.array,
};

export default PhotoList;
