import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import TeamView from 'components/TeamView';

@withAuthentication()
@withApiRead({
  storeName: 'Team',
  api: {
    get: '/teams/:id',
  },
})
@withLayout({
  type: 'simplified',
})
export default class Team extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data.payload !== undefined) {
      return (
        <TeamView team={data.payload} />
      );
    }
    return null;
  }
}

Team.propTypes = {
  data: PropTypes.array,
};
