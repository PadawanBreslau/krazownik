import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Solution = ({ value }) => <div className={styles.solution}>{value}</div>;

Solution.propTypes = {
  value: PropTypes.string,
};

export default Solution;
