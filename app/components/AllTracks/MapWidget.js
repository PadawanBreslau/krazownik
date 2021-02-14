import React from 'react';
import PropTypes from 'prop-types';
import GpxPointsMap from 'components/GpxPointsMap';
import styles from './styles.scss';

const MapWidget = ({ tracks, title }) => (
  <div className={styles.content}>
    <div className={styles.title}>
      {title}: rok {tracks[0].year}
    </div>
    <div className={styles.map}>
      <GpxPointsMap tracks={tracks} multitrack />
    </div>
  </div>
);

MapWidget.propTypes = {
  tracks: PropTypes.array,
  title: PropTypes.string,
};

export default MapWidget;
