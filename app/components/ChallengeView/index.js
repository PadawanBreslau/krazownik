import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { isLoggedIn } from 'helpers/User';
import ToggleChallengeForm from './ToggleChallengeForm';


const ChallengeView = ({ data }) =>
  (
    <>
    <div className={styles.challenge}>
        <div className='header'>
        <span className={styles.title}>{data.title}</span>      
        <div className={styles.image}><img src={data.icon} alt={data.title}></img></div>
        </div>
        <span className={styles.description}>{data.description}</span>
        <h4>Punkty: {data.points}</h4>

      { data.challengeConditions !== undefined && data.challengeConditions.length > 0 &&
      <>
      <h2>Warunki:</h2>
      <ul>
        {data.challengeConditions.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
      </>
      }
    </div>
    <div>
    { isLoggedIn() && 
      <ToggleChallengeForm challengeId={data.id} />
    }
    </div>
    </>
  )

ChallengeView.propTypes = {
  data: PropTypes.any,
}

export default ChallengeView;