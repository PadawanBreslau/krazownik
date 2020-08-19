import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import RegisterIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/register.svg';
import LoginIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/login-add.svg';

const LoggedOutPanel = () => (
  <div className={styles.buttons}>
    <Link to="/login">
      <LoginIcon
        style={{ marginLeft: 10 }}
        width={40}
        height={40}
        cursor="pointer"
        title="Zaloguj się"
      />
    </Link>
    <Link to="/register">
      <RegisterIcon
        style={{ marginLeft: 10 }}
        width={40}
        height={40}
        cursor="pointer"
        alt="Zarejestruj się"
      />
    </Link>
  </div>
);

export default LoggedOutPanel;
