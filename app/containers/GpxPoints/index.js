import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import GpxPointsMap from 'components/GpxPointsMap'


@withApiRead({
  storeName: 'GpxPoints',
  api: {
    get: '/gpx_points',
  },
})
@withLayout({
  type: 'simplified',
})
export default class GpxPoints extends React.PureComponent {
  render() {
    const { data } = this.props;

    console.log("GPX", data)
    if (data.payload !== undefined) {
      return (
        <GpxPointsMap data={data.payload} />
      );
    }
    return null;
  }
}

GpxPoints.propTypes = {
  data: PropTypes.array,
};
