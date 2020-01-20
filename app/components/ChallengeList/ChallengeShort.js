import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const Challenge = ({ data }) =>
  (
    <Link to={`/challenges/${data.id}`}>
      <div className={styles.challengeBox}>
        <h2>{data.title}</h2>
        <span className={styles.description}>{data.description}</span>
        <h4>Points: {data.points}</h4>
      </div>
    </Link>
  )

Challenge.propTypes = {
  data: PropTypes.object,
}

export default Challenge;