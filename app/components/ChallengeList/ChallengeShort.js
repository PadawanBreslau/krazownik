import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const Challenge = ({ data }) =>
  (
    <Link to={`/challenges/${data.id}`}>
      <div className={styles.challengeBox}>
        <div className='header'>
        <span className={styles.title}>{data.title}</span>      
        <div className={styles.image}><img src={data.icon} alt={data.title}></img></div>
        </div>
        <span className={styles.description}>{data.description}</span>
        <h4>Punkty: {data.points}</h4>
      </div>
    </Link>
  )

Challenge.propTypes = {
  data: PropTypes.object,
}

export default Challenge;
