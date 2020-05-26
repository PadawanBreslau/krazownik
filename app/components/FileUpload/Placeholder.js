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

  console.log("4")
  console.log('upload stage', uploadState)

  return (
    <div className={styles.wrapper}>
      {DROPZONES_STATES[uploadState].icon}
      <h3 className={headingClass}>{DROPZONES_STATES[uploadState].heading}</h3>
      <span className={styles.helper}>{DROPZONES_STATES[uploadState].helper}</span>
      <span className={infoClass}>{DROPZONES_STATES[uploadState].info}</span>
    </div>
  );
}

CandidateSignupDropzonePlaceholder.propTypes = {
  uploadState: PropTypes.string,
};

export default CandidateSignupDropzonePlaceholder;