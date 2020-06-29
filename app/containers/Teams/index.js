import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import TeamsList from 'components/TeamsList';

@withAuthentication()
@withApiRead({
  storeName: 'Teams',
  api: {
    get: '/teams',
  },
})
@withLayout({
  type: 'simplified',
})
export default class Teams extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data.payload.length > 0) {
      return <TeamsList data={data.payload} />;
    }
    return null;
  }
}

Teams.propTypes = {
  data: PropTypes.array,
};
