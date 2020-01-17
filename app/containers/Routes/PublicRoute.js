import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
export class PublicRoute extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(componentProps) => (
          <div>
            <Component {...componentProps} />
          </div>
        )}
      />
    );
  }
}
PublicRoute.propTypes = {
  component: PropTypes.any,
  onLogout: PropTypes.func,
};
export default PublicRoute;
