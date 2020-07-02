import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Result = ({ result }) => (
  <tr>
    <td className={styles.cell}>{result.name}</td>
    <td className={styles.cell}>{result.result.pointsFromKm}</td>
    <td className={styles.cell}>{result.result.pointsFromAscent}</td>
    <td className={styles.cell}>{result.result.pointsFromChallenges}</td>
    <td className={styles.cell}>{result.result.pointsFromBonusPoints}</td>
    <td className={styles.cell}>{result.result.extraPoints}</td>
    <td className={styles.cell}>{result.total}</td>
  </tr>
);

Result.propTypes = {
  result: PropTypes.object,
};

export default Result;
