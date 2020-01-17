import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { setHeadersFromQuery, setToStorage } from 'helpers/Headers';
import { withApiWrite } from 'hoc/apiHOC';
import withLayout from 'hoc/layoutHOC';
import withAuthentication from 'hoc/authHOC';
import SignupForm from 'components/SignupForm';
import { registrationRole } from 'helpers/Roles';

@withLayout({ type: 'simplified' })
@withAuthentication()
@withApiWrite({
  storeName: 'signup',
  formName: 'signupForm',
  api: {
    post: '/auth/sign_up',
  },
  initialize: (props) => ({
    terms: false,
    role: registrationRole(props.location.pathname),
  }),
})
export default class SignUp extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    setHeadersFromQuery(this.props.location.search);
  }

  componentDidUpdate() {
    const nextPayload = this.props.data.payload;
    if (nextPayload.name) {
      setToStorage('name', nextPayload.name);
      this.props.dispatch(push('/'));
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return <SignupForm {...this.props} handleSubmit={handleSubmit} />;
  }
}

SignUp.propTypes = {
  handleSubmit: PropTypes.func,
  location: PropTypes.object,
  data: PropTypes.object,
  dispatch: PropTypes.func,
};
