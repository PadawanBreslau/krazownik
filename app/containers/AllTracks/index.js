import React from 'react';
import PropTypes from 'prop-types';
import { withApiRead } from 'hoc/apiHOC';
import AllTracksWidget from 'components/AllTracks/MapWidget';

@withApiRead({
  storeName: 'EveryoneTracks',
  api: {
    get: '/tracks/index_all',
  },
})
export class AllTracks extends React.PureComponent {
  render() {
    const { data } = this.props;
    if (data.payload !== undefined && data.payload.length !== 0) {
      return <AllTracksWidget tracks={data.payload} title="Trasy wszystkich" />;
    }
    return null;
  }
}

AllTracks.propTypes = {
  data: PropTypes.object,
};

export default AllTracks;
