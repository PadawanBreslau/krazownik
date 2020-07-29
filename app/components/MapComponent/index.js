import React from 'react';
import PropTypes from 'prop-types';
import Leaflet from 'leaflet';
import { Map, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import PopupContent from './PopupContent';
import styles from './styles.scss';

export default class MapComponent extends React.PureComponent {
  render() {
    const { data, gpxPoints, zoom, bonusPoints, tracks } = this.props;
    const accomodation = [50.38938, 16.358968];
    const location =
      data !== undefined && data.length === 1 ? [data[0].lat, data[0].lng] : accomodation;
    const imageBlue = new Leaflet.Icon({
      iconUrl: require('images/icons/marker-icon-blue.png'), // eslint-disable-line global-require
      iconSize: [20, 30],
      popupAnchor: [0, -20],
    });
    const imageRed = new Leaflet.Icon({
      iconUrl: require('images/icons/marker-icon-red.png'), // eslint-disable-line global-require
      iconSize: [20, 30],
      popupAnchor: [0, -20],
    });

    return (
      <Map center={location} zoom={zoom}>
        <TileLayer
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />

        {bonusPoints &&
          data &&
          data.map((bonusPoint) => (
            <Marker
              key={bonusPoint.id}
              position={[bonusPoint.lat, bonusPoint.lng]}
              icon={bonusPoint.completed ? imageBlue : imageRed}
            >
              <Popup className={styles.popup}>
                <PopupContent bonusPoint={bonusPoint} />
              </Popup>
            </Marker>
          ))}

        {tracks &&
          gpxPoints &&
          gpxPoints.map((gpxPoint) => (
            <CircleMarker
              key={gpxPoint.id}
              center={[gpxPoint.lat, gpxPoint.lng]}
              color={gpxPoint.color}
              radius={5}
            >
              <Popup className={styles.popup}>{gpxPoint.counter}</Popup>
            </CircleMarker>
          ))}

        <CircleMarker center={accomodation} color="red" radius={13} />
      </Map>
    );
  }
}

MapComponent.propTypes = {
  data: PropTypes.array,
  gpxPoints: PropTypes.array,
  zoom: PropTypes.number,
  bonusPoints: PropTypes.bool,
  tracks: PropTypes.bool,
};
