import React from 'react';
import PropTypes from 'prop-types';

export class ParticipationFiles extends React.PureComponent {
  render() {
    const { data } = this.props;

    return(<h1>Pliki</h1>);
  }
}

ParticipationFiles.propTypes = {
  data: PropTypes.array,
}

export default ParticipationFiles;