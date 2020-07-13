import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormField from 'components/FormField';
import Button from 'components/Button';
import MessageBox from 'components/MessageBox';
import HidableBox from 'components/MessageBox/HidableBox';
import Message from 'components/MessageBox/Message';
import styles from './styles.scss';

function LoginForm(props) {
  const { handleSubmit, location } = props;
  return (
    <div className="form-wrapper">
      <h1 className="form-title">Zaloguj się na swoje konto</h1>
      <form>
        {location.search === '?password_reset=true' && (
          <HidableBox delay={5000} static>
            <Message
              message={{
                type: 'success',
                text: 'Zresetowane hasło zostało wysłane na maila',
              }}
            />
          </HidableBox>
        )}
        <MessageBox />
        <div className="form-row form-row--full">
          <FormField label="Email" type="text" fieldName="email" className="form-field" />
        </div>
        <div className="form-row form-row--full">
          <FormField label="Hasło" type="password" fieldName="password" className="form-field" />
        </div>
        <Button className="form-button">
          <button type="submit" onClick={handleSubmit}>
            Zaloguj
          </button>
        </Button>

        <Link to="/reset_password" className={styles.passwordLink}>
          Zapomniałeś hasła?
        </Link>
      </form>
    </div>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  location: PropTypes.object,
};

export default LoginForm;
