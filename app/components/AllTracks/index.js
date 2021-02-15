import React from 'react';
import PropTypes from 'prop-types';
import EveryonesTracks from 'containers/AllTracks';
import styles from './styles.scss';
import MapWidget from './MapWidget';

export class AllTracks extends React.PureComponent {
  render() {
    const { tracks } = this.props;
    return (
      <div className={styles.mapSplit}>
        <MapWidget tracks={tracks} title="Twoje trasy" />
        <EveryonesTracks />
      </div>
    );
  }
}

AllTracks.propTypes = {
  tracks: PropTypes.array,
};

export default AllTracks;
