import React from 'react';
import PropTypes from 'prop-types';
import FileUpload from 'components/FileUpload'

export class ParticipationFiles extends React.PureComponent {
  render() {
    const { data } = this.props;

    return(
      <div>
    <h1>Pliki</h1>
    <FileUpload />
    </div>
    );
  }
}

ParticipationFiles.propTypes = {
  data: PropTypes.array,
}

export default ParticipationFiles;