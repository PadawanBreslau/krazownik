import React from 'react';
import PropTypes from 'prop-types';
import GpxPointsMap from 'components/GpxPointsMap';
import styles from './styles.scss';

export class AllTracks extends React.PureComponent {
  render() {
    const { tracks } = this.props;
    return (
      <div className={styles.content}>
        <div className={styles.title}>Twoje trasy: rok {tracks[0].year}</div>
        <div className={styles.map}>
          <GpxPointsMap tracks={tracks} multitrack />
        </div>
      </div>
    );
  }
}

AllTracks.propTypes = {
  tracks: PropTypes.array,
};

export default AllTracks;
