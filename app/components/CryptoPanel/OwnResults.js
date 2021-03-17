import React from 'react';
import PropTypes from 'prop-types';
import Solution from './Solution';
import styles from './styles.scss';

function properDeclination(number){
  if(number == 1){
    return 'próba'
  }
  else if(number == 2 || number == 3 || number == 4 ){
    return 'próby'
  }
  else{
    return 'prób'
  }
}

const OwnResults = ({ data }) => (
  <div className={styles.mySolutions}>
    <div className={styles.retries}>Pozostało: {10 - data.solutionsSize} {properDeclination(10-data.solutionsSize)}</div>
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
  </div>
);

OwnResults.propTypes = {
  data: PropTypes.array,
};

export default OwnResults;
