import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import RegionBonusPoints from 'components/BonusPoints'
import { Map, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";

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

        
      <Map center={[49.429231, 20.498793]} zoom={11}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {data.payload.map((d)=>(
        <Marker position={[d.lat, d.lng]}>
          <Popup>
            {d.name} : {d.points} punkty
          </Popup>
        </Marker>))
        }
        <CircleMarker center={[49.429231, 20.498793]} color="red" radius={18}>
        </CircleMarker>

      </Map>
      </>
      );
    }
    return null;
  }
}

BonusPoints.propTypes = {
  data: PropTypes.array,
};
