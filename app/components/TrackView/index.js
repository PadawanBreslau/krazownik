import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isLoggedIn, currentUser } from 'helpers/User';
import MapComponent from 'components/MapComponent';
import UpdateTrackForm from './UpdateTrackForm';
import DeleteTrackForm from './DeleteTrackForm';
import Bookmark from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/bookmark.svg';
import styles from './styles.scss';

export default class TrackView extends React.PureComponent {
  render() {
    const { data, gpxPoints, handleSubmit } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.map}>
          <MapComponent
            gpxPoints={gpxPoints}
            zoom={12}
            customStyle={{ height: '85vh', width: '100%' }}
            tracks
          />
        </div>

        <div className={styles.content}>
          <p className={styles.header}>
            {data.customName || data.filename} ({data.filesize}) {data.metadata?.startDate}{' '}
          </p>
          <div className={styles.dataSection}>
            <div className={styles.data}>
              <p className={styles.value}>Autor: {data.username}</p>
              <p className={styles.value}>Rok: {data.year}</p>
              {data.metadata?.distance && (
                <p className={styles.value}>Długość: {data.metadata.distance} km</p>
              )}
              {data.metadata?.ascent && (
                <p className={styles.value}>Suma podejść: {data.metadata.ascent} m</p>
              )}
              {data.metadata?.descent && (
                <p className={styles.value}>Suma zejść: {data.metadata.descent} m</p>
              )}
              {data.metadata?.totalTime && (
                <p className={styles.value}>Łączny czas: {data.metadata.totalTime}</p>
              )}
              {data.metadata?.startTime && (
                <p className={styles.value}>Łączny czas: {data.metadata.startTime}</p>
              )}
            </div>
            <div className={styles.points}>
              <span className={styles.pointCount}>{data.points}</span>
              <Bookmark />
            </div>
          </div>

          {isLoggedIn() &&
            currentUser(data.username) && (
              <>
                <UpdateTrackForm handleSubmit={handleSubmit} />
                <DeleteTrackForm />
                <Link to="/tracks">
                  <p className={styles.return}>Powrót do listy tras</p>
                </Link>
              </>
            )}
        </div>
      </div>
    );
  }
}

TrackView.propTypes = {
  data: PropTypes.object,
  gpxPoints: PropTypes.array,
  handleSubmit: PropTypes.func,
};
