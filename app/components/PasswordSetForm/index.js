/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormField from 'components/FormField';
import Button from 'components/Button';
import MessageBox from 'components/MessageBox';
import styles from './styles.scss';

function PasswordForm(props) {
  const { handleSubmit } = props;
  return (
    <div className="form-wrapper">
      <h1 className="form-title">Zmień hasło</h1>
      <MessageBox />
      <form>
        <div className="form-row form-row--full">
          <FormField label="Hasło" type="password" fieldName="password" className="form-field" />
        </div>
        <div className="form-row form-row--full">
          <FormField
            label="Potwierdzenie hasła"
            type="password"
            fieldName="password_confirmation"
            className="form-field"
          />
        </div>
        <Button className="form-button">
          <button type="submit" onClick={handleSubmit}>
            Przejdź do strony
          </button>
        </Button>
        <Link to="/login" className={styles.passwordLink}>
          Masz już hasło? Po cholerę tu wszedłeś?
        </Link>
      </form>
    </div>
  );
}

PasswordForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default PasswordForm;
