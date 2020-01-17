import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withApiWrite } from 'hoc/apiHOC';
import { change } from 'redux-form';
import { parseQuery } from 'helpers/Headers';
import withLayout from 'hoc/layoutHOC';
import PasswordRemindMessage from 'components/PasswordRemindMessage';
import PasswordForgotForm from 'components/PasswordForgotForm';

@withLayout({ type: 'simplified' })
@withApiWrite({
  storeName: 'password',
  formName: 'passwordForm',
  api: {
    post: '/auth/password_reset',
  },
})
export class PasswordForgot extends React.PureComponent {
  componentDidMount() {
    const { search } = this.props.location;
    const searchObject = parseQuery(search);

    if (searchObject.email) {
      this.props.dispatch(change('passwordForm', 'email', searchObject.email));
    }
  }

  render() {
    const { handleSubmit, data, submitSucceeded } = this.props;
    if (submitSucceeded && !data.error) {
      return (
        <PasswordRemindMessage message="A link to reseting your password has been sent to your email account. Please check your email and follow the instructions." />
      );
    }
    return <PasswordForgotForm {...this.props} handleSubmit={handleSubmit} />;
  }
}

PasswordForgot.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  submitSucceeded: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(PasswordForgot);
