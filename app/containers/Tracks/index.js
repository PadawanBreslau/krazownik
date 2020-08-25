import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import ParticipationFiles from 'containers/ParticipationFiles';

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
    return <ParticipationFiles files={data} />;
  }
}

Tracks.propTypes = {
  data: PropTypes.object,
};

export default Tracks;
