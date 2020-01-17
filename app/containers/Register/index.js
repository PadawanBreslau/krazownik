/**
 *
 * Register
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { showUiSuccess } from 'redux/UI/actions';
import { getFormValues } from 'redux-form/immutable';
import { withApiWrite } from 'hoc/apiHOC';
import { prepareEndpoint } from 'helpers/Url';
import generateActions from 'redux/api/actions';
import withLayout from 'hoc/layoutHOC';
import withAuthentication from 'hoc/authHOC';
import RegisterForm from 'components/RegisterForm';
import { FIELD_NAMES } from 'components/RegisterForm/constants';
import { fromJS } from 'immutable';
import { randomPassword } from 'utils/randomPassword';
import { ROLES } from '../../rolesConstants';

@withLayout({ type: 'simplified' })
@withAuthentication()
@withApiWrite({
  storeName: 'registerForm',
  formName: 'registerForm',
  customFormOptions: {
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions('registerForm');
      let fieldsToSkip;
      if (payload.get(FIELD_NAMES.role.fieldName) === ROLES.company) {
        fieldsToSkip = !payload.get(FIELD_NAMES.skipEmail.fieldName)
          ? [FIELD_NAMES.password.fieldName, FIELD_NAMES.skipEmail.fieldName]
          : (fieldsToSkip = [FIELD_NAMES.skipEmail.fieldName]);
      } else {
        const onlyCompanyFields = _.pickBy(FIELD_NAMES, (x) => x.companyOnly);
        fieldsToSkip = Object.keys(onlyCompanyFields).map(
          (key) => onlyCompanyFields[key].fieldName,
        );
      }
      const formattedPayload = payload.filterNot((__, key) => fieldsToSkip.includes(key)).toJS();

      const formattedEndpoint = prepareEndpoint('/users', props);

      const successCallbackAction = [showUiSuccess('User was successfully registered')];
      dispatch(submitPageData(formattedEndpoint, 'post', formattedPayload, successCallbackAction));
    },
  },
  api: {},
  initialize: () => fromJS({ password: randomPassword(), role: ROLES.company }),
})
class Register extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit } = this.props;
    return (
      <RegisterForm
        {...this.props}
        handleSubmit={handleSubmit}
        reloadCallbackActions={this.props.reloadCallbackActions}
        formValues={this.props.formValues}
      />
    );
  }
}

Register.propTypes = {
  handleSubmit: PropTypes.func,
  reloadCallbackActions: PropTypes.func,
  formValues: PropTypes.object,
};

export default connect((state) => ({
  formValues: getFormValues('registerForm')(state),
}))(Register);
