import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MapDisplay from './MapDisplay';
import styles from './styles.scss';

export default class EventDisplay extends React.PureComponent {
  render() {
    const { files, year } = this.props;

    return (
      <div className={styles.eventDisplayRow}>
        <Link to={`tracks/${year}/all`}>
          <div className={styles.eventYear}>{year}</div>
        </Link>
        <div className={styles.eventMaps}>
          {files.map((file) => (
            <MapDisplay file={file} />
          ))}
        </div>
      </div>
    );
  }
}

EventDisplay.propTypes = {
  files: PropTypes.array,
  year: PropTypes.string,
};
