import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight, ChevronLeft } from '@material-ui/icons';
import { CircleProgress } from 'react-gradient-progress'
import PhotoFrame from './PhotoFrame';
import styles from './styles.scss';

function calculateColors(completion){
  if(completion < 33.3){
    return ['#00BBFF', '#f74848']
  }
  else if(completion < 66.6){
    return ['#00BBFF', '#f7ce48']
  }
  else{ 
    return ['#00BBFF', '#48f79d']
  }
}

const TeamTask = ({ task, teamId }) => {
  const [photosVisible, setPhotosVisible] = useState(true);
  const photosLeft = task.amount - (task.teamTaskPhotos?.length || 0);
  const chevron = photosVisible ? <ChevronLeft /> : <ChevronRight />;
  const colors = calculateColors(task.completion);

  return (
    <div className={styles.teamTask}>
      <div className={styles.rowWithContent}>
        <div className={styles.taskContent} onClick={() => setPhotosVisible(!photosVisible)}>
          <CircleProgress percentage={task.completion} strokeWidth={4} width={75} fontSize='12px' primaryColor={colors} />
          {task.content} {chevron}
        </div>
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
