import React from 'react';
import PropTypes from 'prop-types';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectUser from 'redux/user/selectors';
import userReducer from 'redux/user/reducer';
import userSaga from 'redux/user/saga';
import { LogOut } from 'redux/user/actions';

export default function withAuthentication(options) {
  return (PageComponent) => {
    class AuthenticationHOC extends React.PureComponent {
      render() {
        const { user } = this.props;

        const layoutProps = {
          user,
          ...options,
        };

        return <PageComponent {...layoutProps} {...this.props} />;
      }
    }
    AuthenticationHOC.propTypes = {
      user: PropTypes.object,
    };
    const mapStateToProps = createStructuredSelector({
      user: makeSelectUser(),
    });
    function mapDispatchToProps(dispatch) {
      return {
        onLogout: () => {
          dispatch(LogOut('/auth/sign_out'));
        },
      };
    }
    const withConnect = connect(
      mapStateToProps,
      mapDispatchToProps,
    );
    const withUserReducer = injectReducer({ key: 'user', reducer: userReducer });
    const withUserSaga = injectSaga({ key: 'user', saga: userSaga });
    const ComposedAuthenticationHOC = compose(
      withUserReducer,
      withUserSaga,
      withConnect,
    )(AuthenticationHOC);

    return ComposedAuthenticationHOC;
  };
}
