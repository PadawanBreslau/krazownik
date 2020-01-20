import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';


const ChallengeView = ({ data }) =>
  (
    <div className={styles.challenge}>
      <h1>{data.title}</h1>
      <span className={styles.description}>{data.description}</span>
      <h4>Points: {data.points}</h4>

      { data.challengeConditions !== undefined && data.challengeConditions.length > 0 &&
      <>
      <h2>Conditions:</h2>
      <ul>
        {data.challengeConditions.map((item) => (
          <li>{item.content}</li>
        ))}
      </ul>
      </>
      
      }

    </div>
  )

ChallengeView.propTypes = {
  data: PropTypes.any,
}

export default ChallengeView;