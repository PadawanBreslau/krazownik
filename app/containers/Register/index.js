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
@withLayout({ type: 'simplified' })
@withAuthentication()
@withApiWrite({
  storeName: 'registerForm',
  formName: 'registerForm',
  customFormOptions: {
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions('registerForm');
      const formattedPayload = payload.toJS();
      const formattedEndpoint = prepareEndpoint('/auth/sign_up', props);
      const successCallbackAction = [showUiSuccess('User was successfully registered')];
      dispatch(submitPageData(formattedEndpoint, 'post', formattedPayload, successCallbackAction));
    },
  },
  api: {},
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
      />
    );
  }
}

Register.propTypes = {
  handleSubmit: PropTypes.func,
  reloadCallbackActions: PropTypes.func,
};

export default connect((state) => ({
  formValues: getFormValues('registerForm')(state),
}))(Register);
