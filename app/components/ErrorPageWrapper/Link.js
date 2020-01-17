import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

function ErrorPageWrapperLink({ linkProps }) {
  let Button;

  if (linkProps.path) {
    Button = (
      <Link to={linkProps.path} className={`btn-default ${styles.button}`}>
        {linkProps.title}
      </Link>
    );
  } else {
    Button = (
      <a href={linkProps.href} className={`btn-default ${styles.button}`}>
        {linkProps.title}
      </a>
    );
  }
  return Button;
}

ErrorPageWrapperLink.propTypes = {
  linkProps: PropTypes.object,
};

export default ErrorPageWrapperLink;
