import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import withAuthentication from 'hoc/authHOC';
import { withApiRead } from 'hoc/apiHOC';
import User from 'components/User';

@withLayout({ type: 'simplified' })
@withAuthentication()
@withApiRead({
  storeName: 'userProfile',
  api: {
    get: '/users/:id',
  },
})
export default class UserProfile extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    const { data } = this.props;
    if (data.payload === undefined) {
      return null;
    }
    return <User data={data.payload}/>;
  }
}

UserProfile.propTypes = {
  data: PropTypes.object,
};
