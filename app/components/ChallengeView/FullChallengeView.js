import React from 'react';
import PropTypes from 'prop-types';
import CompletionList from '../CompletionList';
import MapComponent from '../MapComponent';
import styles from './styles.scss';

const FullChallengeView = ({ challengeConditions, challengeCompletions, locations }) => (
  <>
    {challengeConditions !== undefined &&
      challengeConditions.length > 0 && (
        <>
          <ul className={styles.conditionList}>
            {challengeConditions.map((item) => (
              <li key={item.id} className={styles.condition}>
                {item.content}
              </li>
            ))}
          </ul>
        </>
      )}

    {locations && (
      <MapComponent
        challengePoints={locations}
        zoom={11}
        customStyle={{ height: '300px', width: '100%' }}
      />
    )}
    {challengeCompletions &&
      challengeCompletions.filter((cc) => cc.completed).length > 0 && (
        <CompletionList data={challengeCompletions} />
      )}
  </>
);

FullChallengeView.propTypes = {
  locations: PropTypes.array,
  challengeCompletions: PropTypes.array,
  challengeConditions: PropTypes.array,
};

export default FullChallengeView;
