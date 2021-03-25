import React from 'react';
import PropTypes from 'prop-types';
import PhotoFrame from './PhotoFrame';
import styles from './styles.scss';

const TeamTask = ({ task }) => {
  const photosLeft = task.amount - (task.taskPhotos?.length || 0);

  return (
    <div className={styles.teamTask}>
      <div className={styles.rowWithContent}>
        <div className={styles.taskContent}>{task.content}</div>
        <div className={styles.photoContent}>
          {task.taskPhotos && task.taskPhotos.map((photo) => <PhotoFrame photo={photo} />)}

          {photosLeft > 0 &&
            [...Array(photosLeft)].map(() => (
              <PhotoFrame taskId={task.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

TeamTask.propTypes = {
  data: PropTypes.array,
};

export default TeamTask;
