import React from 'react';
import PropTypes from 'prop-types';
import DeletePhoto from 'containers/TeamPhoto/DeletePhoto';
import UpdatePhotoForm from './UpdatePhotoForm';
import styles from './styles.scss';
import { Link } from 'react-router-dom';

const PhotoDetails = ({ data, handleSubmit }) => (
  <div className={styles.teamTaskPhotoDetails}>
    <div className={styles.photoView}>
      <p className={styles.taskName}>{data.taskName}</p>
      <img src={data.photo} />
    </div>
    <div className={styles.metadata}>
      <div className={styles.info}>
        <p>
          {data.username} ({data.createdAt})
        </p>
      </div>
      <div className={styles.accepted}>
        {data.accepted ? (
          <span>Zaakceptowane przez szefa drużyny</span>
        ) : (
          <span>Czeka na akceptcję szefa drużyny</span>
        )}
      </div>
      { data.leader &&
        <div className={styles.actions}>
          <UpdatePhotoForm handleSubmit={handleSubmit} accepted={data.accepted} />
          <DeletePhoto id={data.id} />
        </div>
      }
      <div className={styles.return}>
        <Link to={'/teams/panel'}> Return to panel</Link>
      </div>
    </div>
  </div>
);

PhotoDetails.propTypes = {
  data: PropTypes.object,
};

export default PhotoDetails;
