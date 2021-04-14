import React from 'react';
import PropTypes from 'prop-types';
import EventDisplay from './EventDisplay';
import styles from './styles.scss';

export default class TracksPresentation extends React.PureComponent {
  render() {
    const { files } = this.props;
    const yearsAvailable = [...new Set(files.map((file) => file.year))];

    return (
      <div>
        {yearsAvailable.map((year) => (
          <div className={styles.event}>
            <EventDisplay year={year} files={files.filter((file) => file.year === year)} />
          </div>
        ))}
      </div>
    );
  }
}

TracksPresentation.propTypes = {
  files: PropTypes.array,
};
