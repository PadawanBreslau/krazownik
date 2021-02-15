import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import ParticipationTracks from 'containers/ParticipationTracks';

@withAuthentication()
@withApiRead({
  storeName: 'Tracks',
  api: {
    get: '/tracks',
  },
})
@withLayout({
  type: 'simplified',
})
export class Tracks extends React.PureComponent {
  render() {
    const { data } = this.props;
    return <ParticipationTracks files={data} />;
  }
}

Tracks.propTypes = {
  data: PropTypes.object,
};

export default Tracks;
