import React from 'react';
import PropTypes from 'prop-types';
import { isLoggedIn } from 'helpers/User';
import ToggleChallengeForm from './ToggleChallengeForm';
import FullChallengeView from './FullChallengeView';
import FullHeader from './FullHeader';
import SimpleHeader from './SimpleHeader';
import styles from './styles.scss';

const ChallengeView = ({ data, fullView }) => (
  <div className={fullView ? styles.fullView : styles.windowView}>
    <div className={data.completed ? styles.completedChallenge : styles.challenge}>
      {fullView ? <FullHeader data={data} /> : <SimpleHeader data={data} />}

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
