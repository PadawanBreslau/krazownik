import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Challenge = ({ data }) =>
  (
    <div className={styles.challengeBox}>
      <h2>{data.title}</h2>
      <span className={styles.description}>{data.description}</span>
      <h4>Points: {data.points}</h4>
    </div>
  )

Challenge.propTypes = {
  data: PropTypes.object,
}

export default Challenge;