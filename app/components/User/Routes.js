import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import MapComponent from 'components/MapComponent';

const Routes = ({ gpxPoints }) => (
  <>
    {gpxPoints &&
      gpxPoints.length !== 0 && (
        <div className={styles.gpxRoutes}>
          <MapComponent gpxPoints={gpxPoints} startingPoint={gpxPoints[0]} zoom={12} tracks />
        </div>
      )}
  </>
);

Routes.propTypes = {
  gpxPoints: PropTypes.array,
};

export default Routes;
