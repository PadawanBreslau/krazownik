import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';


@withApiRead({
  storeName: 'BonusPoint',
  api: {
    get: '/bonus_points/:id',
  },
})
@withLayout({
  type: 'simplified',
})
export default class BonusPointMap extends React.PureComponent {

  render() {
    const { data } = this.props;
    const accomodation = [49.429231, 20.498793]
    
    if(data.payload === undefined || data.payload.length === 0){
      return null;
    }

    const position = [data.payload.lat, data.payload.lng]
    return (
      <>
      <h1>Trzy Korony</h1>
    
      <Map center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            {data.payload.name} : {data.payload.points} punkty
          </Popup>
        </Marker>
        <Marker position={accomodation}>
          <Popup>
            Baza imprezy
          </Popup>
        </Marker>
        <CircleMarker center={position} color="red" radius={18}>
        </CircleMarker>

      </Map>
      </>
      );
  }
}

BonusPointMap.propTypes = {
  data: PropTypes.array,
};
