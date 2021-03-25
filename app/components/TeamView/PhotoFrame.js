import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PhotoForm from './PhotoForm';
import styles from './styles.scss';

const PhotoFrame = ({ photo, taskId }) => (
  <div className={styles.teamTaskPhoto}>
     {photo && <Link to={`/team_photos/${photo.id}`}><img src={photo.photo}/></Link>}

     {!photo &&  <PhotoForm taskId={taskId} />}
  </div>
);

PhotoFrame.propTypes = {
  photo: PropTypes.string,
};

export default PhotoFrame;
