import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import TrackView from 'components/TrackView';

@withAuthentication()
@withApiRead({
  storeName: 'Track',
  api: {
    get: '/tracks/:id',
  },
})
@withLayout({
  type: 'simplified',
})
export class Track extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data === undefined) {
      return null;
    }

    return <TrackView data={data.payload} gpxPoints={data.payload.gpxPoints} />;
  }
}

Track.propTypes = {
  data: PropTypes.object,
};

export default Track;
