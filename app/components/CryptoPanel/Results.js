import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';
import styles from './styles.scss';

const Results = ({ data }) => (
  <div className={styles.cryptoResults}>
    <div className={styles.title}>Wyniki</div>
    {data.map((result)=>(<Result data={result} />))}
  </div>
);

Results.propTypes = {
  data: PropTypes.array,
};

export default Results;
