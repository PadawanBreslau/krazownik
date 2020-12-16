import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DROPZONES_STATES } from './constants';
import styles from './Placeholder.scss';

const cx = classNames.bind(styles);

function CandidateSignupDropzonePlaceholder({ uploadState, label }) {
  const headingClass = cx({
    heading: true,
    headingError: uploadState === 'error',
    headingSuccess: uploadState === 'success',
  });

  return (
    <div className={styles.wrapper}>
      {DROPZONES_STATES[uploadState].icon}
      <h3 className={headingClass}>{label || DROPZONES_STATES[uploadState].heading}</h3>
    </div>
  );
}

CandidateSignupDropzonePlaceholder.propTypes = {
  uploadState: PropTypes.string,
  labek: PropTypes.string,
};

export default CandidateSignupDropzonePlaceholder;
