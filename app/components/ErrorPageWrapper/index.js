import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/logo.svg';
import ErrorPageWrapperLink from './Link';
import styles from './styles.scss';

function ErrorPageWrapper(props) {
  const { imgSrc, header, text, homeButton, actionButton, padded, children } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <Link to="/">
          <Logo className={styles.logo} />
        </Link>
      </div>
      <div className={styles.container}>
        <img
          src={imgSrc}
          alt="header"
          className={`${styles.headerImg} ${padded ? styles.headerImgPadded : ''}`}
        />
        <h1 className={`${styles.header} ${padded ? styles.headerPadded : ''}`}>{header}</h1>
        <p className={styles.text}>{text || children}</p>
        {homeButton && (
          <div className={styles.buttons}>
            <Link to={homeButton.path} className={`btn-primary ${styles.button}`}>
              {homeButton.title}
            </Link>
            <ErrorPageWrapperLink linkProps={actionButton} />
          </div>
        )}
      </div>
    </div>
  );
}

ErrorPageWrapper.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string,
  imgSrc: PropTypes.string,
  homeButton: PropTypes.object,
  actionButton: PropTypes.object,
  padded: PropTypes.bool,
  children: PropTypes.node,
};

export default ErrorPageWrapper;
