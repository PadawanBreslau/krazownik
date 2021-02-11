import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Result = ({ result, detailsVisible }) => (
  <tr>
    <td className={styles.cellHighlighted}>{result.name}</td>
    {!detailsVisible && <td className={styles.cell}>{result.result.pointsFromKm}</td>}
    {!detailsVisible && <td className={styles.cell}>{result.result.pointsFromAscent}</td>}
    {!detailsVisible && <td className={styles.cell}>{result.result.pointsFromChallenges}</td>}
    {detailsVisible && <td className={styles.cell}>{result.result.pointsFromBonusPoints}</td>}
    {detailsVisible && <td className={styles.cell}>{result.result.extraPoints}</td>}
    <td className={styles.cellHighlighted}>{result.total}</td>
  </tr>
);

Result.propTypes = {
  result: PropTypes.object,
  detailsVisible: PropTypes.object,
};

export default Result;
