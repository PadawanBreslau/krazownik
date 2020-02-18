/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { push } from 'react-router-redux';
import { withApiWrite } from 'hoc/apiHOC';
import withLayout from 'hoc/layoutHOC';
import withAuthentication from 'hoc/authHOC';
import { setToStorage } from 'helpers/Headers';
import { showUiError } from 'redux/UI/actions';
import LoginForm from 'components/LoginForm';

@withLayout({ type: 'simplified' })
@withAuthentication()
@withApiWrite({
  storeName: 'loginForm',
  formName: 'loginForm',
  api: {
    post: '/auth/sign_in',
  },
})
export default class Login extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { location } = this.props;
    if (location.state && location.state.from.pathname !== '/') {
      this.props.dispatch(
        showUiError({
          code: 401,
          body: {
            status: 401,
            error: 'You need to login to see this page',
          },
        }),
      );
    }
  }

  componentDidUpdate(prevProps) {
    const nextPayload = this.props.data.payload;
    const prevPayload = prevProps.data.payload;

    if (prevPayload.name !== nextPayload.name) {
      setToStorage('name', nextPayload.name);

      this.props.dispatch(push('/panel'));
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return <LoginForm {...this.props} handleSubmit={handleSubmit} />;
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func,
  data: PropTypes.object,
  dispatch: PropTypes.func,
  location: PropTypes.object,
};
