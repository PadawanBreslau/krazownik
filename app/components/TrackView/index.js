import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from 'components/MapComponent';
import styles from './styles.scss';

export default class TrackView extends React.PureComponent {
  render() {
    const { data, gpxPoints } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.map}>
          <MapComponent
            gpxPoints={gpxPoints}
            zoom={12}
            customStyle={{ height: '85vh', width: '100%' }}
          />
        </div>

        <div className={styles.content}>
          <h1>
            {data.filename} ({data.filesize}){' '}
          </h1>
        </div>
      </div>
    );
  }
}

TrackView.propTypes = {
  data: PropTypes.object,
  gpxPoints: PropTypes.array,
};
