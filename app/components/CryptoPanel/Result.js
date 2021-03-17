import React from 'react';
import PropTypes from 'prop-types';
import Solution from './Solution';
import styles from './styles.scss';

function properDeclination(number) {
  if (number == 1) {
    return 'poprawne rozwiązanie';
  } else if (number == 2 || number == 3) {
    return 'poprawne rozwiązania';
  } else {
    return 'poprawnych rozwiązań';
  }
}

const Result = ({ data }) => {
  const style = data.winner ? styles.winner : styles.count
  return (
    <div className={styles.cryptoResult}>
      <div className={style}>
        {data.name}: {data.goodSolutionsSize} {properDeclination(data.goodSolutionsSize)}
      </div>
    </div>
  );
};

Result.propTypes = {
  data: PropTypes.object,
};

export default Result;
