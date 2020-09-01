import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { DROPZONES_STATES } from './constants';
import styles from './Placeholder.scss';

const cx = classNames.bind(styles);

function CandidateSignupDropzonePlaceholder({ uploadState }) {
  const headingClass = cx({
    heading: true,
    headingError: uploadState === 'error',
    headingSuccess: uploadState === 'success',
  });

  const infoClass = cx({
    info: true,
    link: uploadState === 'error' || uploadState === 'success',
    infoLoading: uploadState === 'loading',
  });

  return (
    <div className={styles.wrapper}>
      {DROPZONES_STATES[uploadState].icon}
      <h3 className={headingClass}>{DROPZONES_STATES[uploadState].heading}</h3>
    </div>
  );
}

CandidateSignupDropzonePlaceholder.propTypes = {
  uploadState: PropTypes.string,
};

export default CandidateSignupDropzonePlaceholder;
