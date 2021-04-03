import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PhotoFrame from './PhotoFrame';
import { ChevronRight, ChevronLeft } from '@material-ui/icons';
import styles from './styles.scss';

const TeamTask = ({ task, teamId }) => {
  const [photosVisible, setPhotosVisible] = useState(false);
  const photosLeft = task.amount - (task.teamTaskPhotos?.length || 0);
  const chevron = photosVisible ? <ChevronLeft/> : <ChevronRight/>

  return (
    <div className={styles.teamTask}>
      <div className={styles.rowWithContent}>
        <div className={styles.taskContent} onClick={() => setPhotosVisible(!photosVisible)}>{task.content} {chevron}</div>
        {photosVisible && (
          <div className={styles.photoContent}>
            {task.teamTaskPhotos &&
              task.teamTaskPhotos.map((photo) => <PhotoFrame photo={photo} />)}

            {photosLeft > 0 &&
              [...Array(photosLeft)].map(() => <PhotoFrame taskId={task.id} teamId={teamId} />)}
          </div>
        )}
      </div>
    </div>
  );
};

TeamTask.propTypes = {
  data: PropTypes.array,
  teamId: PropTypes.number,
};

export default TeamTask;
