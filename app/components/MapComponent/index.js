import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet";

export default class MapComponent extends React.PureComponent {
  render(){
    const { data, zoom } = this.props;
    const accomodation = [49.429231, 20.498793]

    console.log(data);


    const location = data.length === 1 ? [data[0].lat, data[0].lng] : accomodation;

    return(
      <Map center={location} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        
        {data.map((bonus_point) => (
          <Marker position={[bonus_point.lat, bonus_point.lng]}>
            <Popup>
              {bonus_point.name} : {bonus_point.points} pkt
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
