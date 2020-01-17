import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/FormField';
import CheckboxField from 'components/CheckboxField';
import Button from 'components/Button';
import MessageBox from 'components/MessageBox';
import validators from 'helpers/Validators';
import { ROLES } from 'rolesConstants';
import { registrationRole } from 'helpers/Roles';
import Title from './Title';
import styles from './styles.scss';

const validateTerms = validators.requireWithMessage('Please read and accept our Privacy policy');

export default function SignupForm(props) {
  const { handleSubmit, location } = props;
  const userRoleByPath = registrationRole(location.pathname);
  const sourcer = userRoleByPath === ROLES.sourcer;
  const talentAdvocate = userRoleByPath === ROLES.talentAdvocate;
  const admin = userRoleByPath === ROLES.admin;
  const enhancedUser = admin || talentAdvocate || sourcer;

  return (
    <div className={styles.wrapper}>
      <Title location={location.pathname} />
      <form>
        <MessageBox />
        <div className="form-row">
          <FormField
            label="Email"
            type="text"
            fieldName="email"
            className={`form-field ${styles.validable}`}
            placeholder="Enter company email"
            validate={[validators.email, validators.required]}
          />
            <FormField
              label="Your name"
              type="text"
              fieldName="name"
              className={`form-field ${styles.validable}`}
              validate={[validators.nameValidator, validators.required]}
            />
          ) 
          )}
        </div>
        <div className="form-row">
          <FormField
            label="Password"
            type="password"
            fieldName="password"
            className={`form-field ${styles.validable}`}
            validate={validators.required}
          />
          {!enhancedUser ? (
            <FormField
              label="Your name"
              type="text"
              fieldName="name"
              className={`form-field ${styles.validable}`}
              validate={[validators.nameValidator, validators.required]}
            />
          ) : (
            ''
          )}
        </div>
        <div className="form-row form-row--full">
          <div className={styles.terms}>
            <CheckboxField fieldName="terms" className="form-field" validate={validateTerms}>
              I accept{' '}
              <a href="https://www.kandidate.com/privacy-policy/" target="_blank">
                Privacy policy
              </a>
            </CheckboxField>
          </div>
        </div>
        <Button className="form-button">
          <button type="submit" onClick={handleSubmit}>
            Sign-up and login
          </button>
        </Button>
      </form>
    </div>
  );
}

SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
  location: PropTypes.any,
};
