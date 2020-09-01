import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import AllTracks from 'components/AllTracks';

@withAuthentication()
@withApiRead({
  storeName: 'TrackAll',
  api: {
    get: '/tracks/:id/all',
  },
})
@withLayout({
  type: 'simplified',
})
export class TrackAll extends React.PureComponent {
  render() {
    const { data } = this.props;
    if (data.payload !== undefined && data.payload.length !== 0) {
      return <AllTracks tracks={data.payload} />;
    }
    return null;
  }
}

TrackAll.propTypes = {
  data: PropTypes.object,
};

export default TrackAll;
