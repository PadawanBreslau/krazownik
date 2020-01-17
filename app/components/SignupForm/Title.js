import React from 'react';
import PropTypes from 'prop-types';
import { registrationRole } from 'helpers/Roles';
import { ROLES } from 'rolesConstants';

function Title(props) {
  const { location } = props;
  const userRoleByPath = registrationRole(location);
  const sourcer = userRoleByPath === ROLES.sourcer;
  const talentAdvocate = userRoleByPath === ROLES.talentAdvocate;
  const admin = userRoleByPath === ROLES.admin;

  return (
    <h1 className="form-title">
      Welcome to Krążownik <br />
    </h1>
  );
}
Title.propTypes = {
  location: PropTypes.any,
};

export default Title;
