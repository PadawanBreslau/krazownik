import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PhotoForm from './PhotoForm';
import styles from './styles.scss';

const PhotoFrame = ({ photo, taskId, teamId }) => (
  <div className={styles.teamTaskPhoto}>
    {photo && (
      <Link to={`/team_photos/${photo.id}`}>
        <img src={photo.photoSmall} />
      </Link>
    )}

    {!photo && <PhotoForm taskId={taskId} teamId={teamId} />}
  </div>
);

PhotoFrame.propTypes = {
  photo: PropTypes.string,
  teamId: PropTypes.number,
  taskId: PropTypes.number,
};

export default PhotoFrame;
