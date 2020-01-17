import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import DeniedPage from 'containers/DeniedPage';
import Authenticator from 'helpers/Authenticator';
import withUI from 'hoc/uiHOC';

@withUI()
export class PrivateRoute extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      component: Component,
      onLogout,
      computedMatch,
      updateKey,
      limitAccess,
      ...rest
    } = this.props;
    return (
      <Route
        {...rest}
        render={(componentProps) => {
          if (Authenticator.isAuthenticated()) {
            if (Authenticator.hasAccess(limitAccess)) {
              return (
                <div>
                  <Component {...componentProps} key={computedMatch.params[updateKey]} />
                </div>
              );
            }
            // eslint-disable-line no-else-return
            return (
              <div>
                <DeniedPage />
              </div>
            );
          }
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: componentProps.location },
              }}
            />
          );
        }}
      />
    );
  }
}
PrivateRoute.propTypes = {
  onLogout: PropTypes.func,
  location: PropTypes.object,
  component: PropTypes.any,
  computedMatch: PropTypes.object,
  updateKey: PropTypes.string,
  limitAccess: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
export default PrivateRoute;
