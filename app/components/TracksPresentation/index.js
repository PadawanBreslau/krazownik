import React from 'react';
import PropTypes from 'prop-types';
import EventDisplay from './EventDisplay';

export default class TracksPresentation extends React.PureComponent {
  render() {
    const { files } = this.props;
    const yearsAvailable = [...new Set(files.map((file) => file.year))];

    return (
      <div>
        {yearsAvailable.map((year) => (
          <div>
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
