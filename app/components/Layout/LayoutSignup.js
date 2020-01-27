import React from 'react';
import PropTypes from 'prop-types';
import LogoIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/logo.svg';
import styles from './styles.scss';

function LayoutSignup(props) {
  return (
    <div className={`${styles.candidateWrapper} ${styles.signupWrapper}`}>
      <nav className={styles.candidateNav}>
        <a href="https://www.krazownik.pl/">
          <LogoIcon className={styles.candidateLogo} />
        </a>
      </nav>
      {props.children}
    </div>
  );
}

LayoutSignup.propTypes = {
  children: PropTypes.node,
};

export default LayoutSignup;
