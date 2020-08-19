import React from 'react';
import PropTypes from 'prop-types';
import withAuthentication from 'hoc/authHOC';
import LogoutIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/logout.svg';

@withAuthentication()
export class LoggedInPanel extends React.PureComponent {
  render() {
    const { onLogout } = this.props;
    return <LogoutIcon width={40} onClick={onLogout} cursor="pointer" />;
  }
}

LoggedInPanel.propTypes = {
  onLogout: PropTypes.func,
};

export default LoggedInPanel;
