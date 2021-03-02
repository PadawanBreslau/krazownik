import React from 'react';
import PropTypes from 'prop-types';
import Solution from './Solution';
import styles from './styles.scss';

const Result = ({ data }) => (
  <div className={styles.cryptoResult}>
    <div className={styles.count}>{data.goodSolutionsSize}</div>
    {data.goodSolutions && (
      <>
        <div className={styles.retries}>Pozostało {10 - data.solutionsSize} prób</div>
        <div className={styles.cryptoGoodSolutions}>
          {data.goodSolutions.map((solution) => (
            <Solution value={solution} />
          ))}
        </div>
        <div className={styles.cryptoBadSolutions}>
          {data.badSolutions.map((solution) => (
            <Solution value={solution} />
          ))}
        </div>
      </>
    )}
  </div>
);

Result.propTypes = {
  data: PropTypes.object,
};

export default Result;
