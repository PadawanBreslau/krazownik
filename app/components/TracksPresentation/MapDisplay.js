import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from 'components/MapComponent';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

export default class MapDisplay extends React.PureComponent {
  render() {
    const { file } = this.props;

    return (
      <div className={styles.mapComponent}>
        <div className={styles.mapHeader}>
          <Link to={`/tracks/${file.id}`}>
            <span className={styles.headerText}>{file.customName || file.filename}</span>
            <span className={styles.headerText}>{file.metadata?.distance} km</span>
          </Link>
        </div>
        <div className={styles.mapBox}>
          <MapComponent
            gpxPoints={file.gpxPoints}
            zoom={12}
            customStyle={{ height: '33vh' }}
            tracks
          />
        </div>
      </div>
    );
  }
}

MapDisplay.propTypes = {
  file: PropTypes.object,
};
