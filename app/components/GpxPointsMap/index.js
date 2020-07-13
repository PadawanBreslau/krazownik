import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from 'components/MapComponent';
import styles from './styles.scss';

export default class GpxPointsMap extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.mapView}>
        <MapComponent gpxPoints={data} zoom={12} tracks />
      </div>
    );
  }
}

GpxPointsMap.propTypes = {
  data: PropTypes.array,
};
