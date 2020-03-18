import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.scss'

function ChallengeCompletions({data}) {
  console.log(data);
  return (
    <Link to={`/challenges/${data.challengeId}`}>
    <div className={styles.iconRow}>
      <div className={data.completed ? styles.iconGreen : styles.iconRed} ><img src={data.icon} alt={data.title}/></div>
      <div className={styles.title}> {data.title} </div>
    </div>
    </Link>
  );
}
ChallengeCompletions.propTypes = {
  data: PropTypes.object,
};

export default ChallengeCompletions;
