import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import RegionBonusPoints from 'components/BonusPoints'
import MapComponent from 'components/MapComponent';

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
  selectRegionPoints(region) {
    const { data } = this.props;

    return data.payload.filter((reg) => (reg.region === region))
  }

  render() {
    const { data } = this.props;
    const regions = Array.from(new Set(data.payload.map((bonusPoint) => (bonusPoint.region))));

    if (data.payload !== undefined) {
      return (
        <>
        <div>
          {regions.map((r)=>(<RegionBonusPoints data={this.selectRegionPoints(r)} region={r} />))}
        </div >

        <MapComponent data={data.payload} zoom={10} />
      </>
      );
    }
    return null;
  }
}

BonusPoints.propTypes = {
  data: PropTypes.array,
};
