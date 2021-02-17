import React from 'react';
import PropTypes from 'prop-types';
import Challenge from './Challenge';
import styles from './styles.scss';

const Challenges = ({ challenges }) => (
  <>
    {challenges &&
      challenges.length !== 0 && (
        <div className={styles.challenges}>
          {challenges.map((challenge)=>(<Challenge item={challenge} />))}
        </div>
      )}
  </>
);

Challenges.propTypes = {
  challenges: PropTypes.array,
};

export default Challenges;
