import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import { isLoggedIn } from 'helpers/User';
import ToggleChallengeForm from './ToggleChallengeForm';


const ChallengeView = ({ data }) =>
  (
    <>
      <div className={data.completed ? styles.completedChallenge : styles.challenge}>
        <div className={styles.title}>{data.title} ({data.points} pkt)</div>
        <div className={styles.icon}><img src={data.icon} alt={data.name} /></div>
        <span className={styles.description}>{data.description}</span>

        {data.challengeConditions !== undefined && data.challengeConditions.length > 0 &&
          <>
            <ul className={styles.conditionList}>
              {data.challengeConditions.map((item) => (
                <li key={item.id} className={styles.condition}>{item.content}</li>
              ))}
            </ul>
          </>
        }
        <div className={styles.finish}>
          {isLoggedIn() &&
            <ToggleChallengeForm challengeId={data.id} completed={data.completed} />
          }
        </div>
      </div>

    </>
  )

ChallengeView.propTypes = {
  data: PropTypes.any,
}

export default ChallengeView;