import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Routes from './Routes';
import Challenges from './Challenges';
import styles from './styles.scss';

const UserParticipation = ({ item }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const label = `Pokaż występ za rok ${item.year}`;
  const completedChallenges = item.challenges.filter((ch) => ch.completed);

  return (
    <div className={styles.participationWithSwitch}>
      <div className={styles.detailsSwitch} onClick={() => setDetailsVisible(!detailsVisible)}>
        <input type="checkbox" checked={detailsVisible} />
        <span className={styles.detailsSwitchLabel}>{label}</span>
      </div>

      {detailsVisible && (
        <div className={styles.participation}>
          <Challenges challenges={completedChallenges} />
          <Routes gpxPoints={item.gpxPoints} />
        </div>
      )}
    </div>
  );
};

UserParticipation.propTypes = {
  data: PropTypes.array,
};

export default UserParticipation;
