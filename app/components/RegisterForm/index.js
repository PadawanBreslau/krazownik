import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormField from 'components/FormField';
import Button from 'components/Button';
import MessageBox from 'components/MessageBox';
import styles from './styles.scss';
import { FIELD_NAMES } from './constants';

function RegisterForm(props) {
  const { handleSubmit } = props;

  return (
    <div className="form-wrapper">
      <h1 className="form-title">Zarejestruj się na Krazownika</h1>
      <form>
        <MessageBox />
        <div className="form-row form-row--full">
          <FormField label="Email" type="text" fieldName="email" className="form-field" />
        </div>
        <div className="userFormPart">
          <div className="form-row form-row--full">
            <FormField
              label="Twoje imię"
              type="text"
              fieldName={FIELD_NAMES.name.fieldName}
              className={`form-field ${styles.validable}`}
            />
          </div>
          <div className="form-row form-row--full">
            <FormField
              label="Hasło"
              type="password"
              fieldName="password"
              className={`form-field ${styles.validable}`}
            />
          </div>
          <div className="form-row form-row--full">
            <FormField
              label="Potwierdź hasło"
              type="password"
              fieldName="password_confirmation"
              className={`form-field ${styles.validable}`}
            />
          </div>
        </div>
        <Button className="form-button">
          <button type="submit" onClick={handleSubmit}>
            Zarejestruj
          </button>
        </Button>
        <Link to="/login" className={styles.returnLink}>
          Powrót do logowania
        </Link>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default RegisterForm;
