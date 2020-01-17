/**
 *
 * RegisterForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormField from 'components/FormField';
import SelectField from 'components/SelectField';
import CheckboxField from 'components/CheckboxField';
import Button from 'components/Button';
import MessageBox from 'components/MessageBox';
import { validateNumericValues } from 'utils/validators';
import styles from './styles.scss';
import { ROLES } from '../../rolesConstants';
import { FIELD_NAMES } from './constants';

function RegisterForm(props) {
  const { handleSubmit, formValues } = props;
  const companyRoleSelected =
    formValues && formValues.get(FIELD_NAMES.role.fieldName) === ROLES.company;
  const skipEmailChecked = formValues && formValues.get(FIELD_NAMES.skipEmail.fieldName) === true;

  return (
    <div className="form-wrapper">
      <h1 className="form-title">Register new user to Krazownik</h1>
      <form>
        <MessageBox />
        <div className="form-row form-row--full">
          <FormField
            label="Email"
            type="text"
            fieldName={FIELD_NAMES.email.fieldName}
            className="form-field"
          />
        </div>
        <SelectField label="Role" type="select" fieldName={FIELD_NAMES.role.fieldName} autoFocus>
          <option value={ROLES.company} key={ROLES.company}>
            Company
          </option>
          <option value={ROLES.sourcer} key={ROLES.sourcer}>
            Sourcer
          </option>
          <option value={ROLES.talentAdvocate} key={ROLES.talentAdvocate}>
            Talent Advocate
          </option>
          <option value={ROLES.admin} key={ROLES.admin}>
            Admin
          </option>
        </SelectField>
        {companyRoleSelected && (
          <div className="companyFormPart">
            <div className="form-row form-row--full">
              <FormField
                label="User name"
                type="text"
                fieldName={FIELD_NAMES.name.fieldName}
                className={`form-field ${styles.validable}`}
                validate={validateNumericValues}
              />
            </div>
            <div className="form-row form-row--full">
              <FormField
                label="Company name"
                type="text"
                fieldName={FIELD_NAMES.companyName.fieldName}
                className="form-field"
              />
            </div>
            <CheckboxField fieldName={FIELD_NAMES.skipEmail.fieldName} className="form-field">
              Skip e-mail, set password for demo introduction first
            </CheckboxField>
          </div>
        )}
        {companyRoleSelected &&
          skipEmailChecked && (
            <div className="skipEmailFormPart">
              <div className="form-row form-row--full">
                <FormField
                  label="Prefilled password"
                  type="text"
                  fieldName={FIELD_NAMES.password.fieldName}
                  className="form-field"
                  disabled
                />
              </div>
            </div>
          )}

        <Button className="form-button">
          <button type="submit" onClick={handleSubmit}>
            Register
          </button>
        </Button>

        <Link to="/" className={styles.returnLink}>
          Return to platform
        </Link>
      </form>
    </div>
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  formValues: PropTypes.object,
};

export default RegisterForm;
