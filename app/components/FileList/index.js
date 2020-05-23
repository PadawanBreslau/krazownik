import React from 'react';
import PropTypes from 'prop-types';
import styles from './file.scss';


const FileList = ({ files }) => {
  const photos = files.filter((file) => (file.name === 'photos'))
  const tracks = files.filter((file) => (file.name === 'tracks'))

  return (
    <div className={styles.fileBox}>
      <div className={styles.files}>
        <h3>Photos</h3>
        {photos && photos.map((file) => (
          <div className={styles.fileRow}>
            {file.filename}
          </div>
        ))}
      </div>
      <div className={styles.files}>
        <h3>Tracks</h3>
        {tracks && tracks.map((file) => (
          <div className={styles.fileRow}>
            {file.filename}
          </div>
        ))}
      </div>
    </div>
  );
}

FileList.propTypes = {
  files: PropTypes.array,
}

export default FileList