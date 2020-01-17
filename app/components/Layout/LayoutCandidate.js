import React from 'react';
import PropTypes from 'prop-types';
import LogoIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/logo.svg';
import styles from './styles.scss';

function LayoutCandidate(props) {
  return (
    <div className={styles.candidateWrapper}>
      <nav className={styles.candidateNav}>
        <a href="https://www.kandidate.com/">
          <LogoIcon className={styles.candidateLogo} />
        </a>
      </nav>
      {props.children}
    </div>
  );
}

LayoutCandidate.propTypes = {
  children: PropTypes.node,
};

export default LayoutCandidate;
