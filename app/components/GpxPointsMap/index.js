import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from 'components/MapComponent';
import styles from './styles.scss';

export default class GpxPointsMap extends React.PureComponent {
  render() {
    const { data, tracks, multitrack } = this.props;
    const allGpx = tracks.map((track) => track.gpxPoints).flat();

    return (
      <>
        {data &&
          !multitrack && (
            <div className={styles.mapView}>
              <MapComponent gpxPoints={data} zoom={12} tracks />
            </div>
          )}

        {tracks &&
          multitrack && (
            <div className={styles.mapView}>
              <MapComponent gpxPoints={allGpx} zoom={12} tracks />
            </div>
          )}
      </>
    );
  }
}

GpxPointsMap.propTypes = {
  data: PropTypes.array,
  tracks: PropTypes.array,
  multitrack: PropTypes.bool,
};
