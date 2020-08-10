import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isLoggedIn } from 'helpers/User';
import styles from './styles.scss';
import ToggleChallengeForm from './ToggleChallengeForm';
import FullChallengeView from './FullChallengeView';

const ChallengeView = ({ data, fullView }) => (
  <div className={fullView ? styles.fullView : styles.windowView}>
    <div className={data.completed ? styles.completedChallenge : styles.challenge}>
      <div className={styles.title}>
        <Link to={`/challenges/${data.id}`}>
          {data.title} ({data.points} pkt)
        </Link>
      </div>
      <div className={styles.icon}>
        <img src={data.icon} alt={data.name} />
      </div>
      <span className={styles.description}>{data.description}</span>

      {data.challengeConditions !== undefined &&
        data.challengeConditions.length > 0 && (
          <>
            <ul className={styles.conditionList}>
              {data.challengeConditions.map((item) => (
                <li key={item.id} className={styles.condition}>
                  {item.content}
                </li>
              ))}
            </ul>
          </>
        )}
      {fullView && (
        <FullChallengeView
          challengeCompletions={data.challengeCompletions}
          locations={data.locations}
        />
      )}

      <div className={styles.finish}>
        {isLoggedIn() && <ToggleChallengeForm challengeId={data.id} completed={data.completed} />}
      </div>
    </div>
  </div>
);

ChallengeView.propTypes = {
  data: PropTypes.any,
  fullView: PropTypes.bool,
};

export default ChallengeView;
