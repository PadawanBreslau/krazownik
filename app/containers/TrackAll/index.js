import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import GpxPointsMap from 'components/GpxPointsMap';

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
    return <GpxPointsMap tracks={data.payload} multitrack />;
  }
}

TrackAll.propTypes = {
  data: PropTypes.object,
};

export default TrackAll;
