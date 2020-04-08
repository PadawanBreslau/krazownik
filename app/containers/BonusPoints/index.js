import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import BonusPointMap from 'components/BonusPointMap'


@withApiRead({
  storeName: 'BonusPoints',
  api: {
    get: '/bonus_points',
  },
})
@withLayout({
  type: 'simplified',
})
export default class BonusPoints extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data.payload !== undefined) {
      return (
        <BonusPointMap data={data.payload} />
      );
    }
    return null;
  }
}

BonusPoints.propTypes = {
  data: PropTypes.array,
};
