import React from 'react';
import PropTypes from 'prop-types';

import Leaflet from 'leaflet'

import { Map, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";
import PopupContent from './PopupContent';

export default class MapComponent extends React.PureComponent {
  render() {
    const { data, zoom } = this.props;
    const accomodation = [49.429231, 20.498793]
    const location = data.length === 1 ? [data[0].lat, data[0].lng] : accomodation;    
    const imageBlue = new Leaflet.Icon({
               iconUrl: require('images/icons/marker-icon-blue.png'),
               iconSize:     [20, 30],
               popupAnchor:  [0, -20]
           })
    const imageRed = new Leaflet.Icon({
               iconUrl: require('images/icons/marker-icon-red.png'),
               iconSize:     [20, 30],
               popupAnchor:  [0, -20]
           })

    return (
      <Map center={location} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />

        {data.map((bonusPoint) => (
          <Marker position={[bonusPoint.lat, bonusPoint.lng]}  icon={bonusPoint.completed ? imageBlue : imageRed}>
            <Popup>
              <PopupContent bonusPoint={bonusPoint} />
            </Popup>
          </Marker>
        )
        )}

        <CircleMarker center={accomodation} color="red" radius={13}>
        </CircleMarker>
      </Map>
    );
  }
}

MapComponent.propTypes = {
  data: PropTypes.array
}
