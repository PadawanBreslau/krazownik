/**
 *
 * LoginForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/FormField';
import Button from 'components/Button';
import MessageBox from 'components/MessageBox';

function PasswordForgotForm(props) {
  const { handleSubmit } = props;
  return (
    <div className="form-wrapper">
      <h1 className="form-title">Forgot password?</h1>
      <MessageBox />
      <form>
        <div className="form-row form-row--full">
          <FormField
            label="Wpisz swój adres email"
            type="email"
            fieldName="email"
            className="form-field"
          />
        </div>
        <Button className="form-button">
          <button type="submit" onClick={handleSubmit}>
            Wyślij
          </button>
        </Button>
      </form>
    </div>
  );
}

PasswordForgotForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default PasswordForgotForm;
