import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import Avatar from 'components/Avatar';
import styles from './styles.scss';

class FileField extends React.Component {
  handleDropOrClick = (acceptedFiles, rejectedFiles, e) => {
    if (rejectedFiles.length > 0) return null;
    let eventOrValue = e;

    if (eventOrValue.type === 'drop') {
      if (acceptedFiles.length) {
        eventOrValue = (e.dataTransfer && e.dataTransfer.files) || acceptedFiles;
      } else {
        eventOrValue = null;
      }
    }

    const file = eventOrValue.target ? eventOrValue.target.files[0] : eventOrValue[0];

    const callback = () => undefined;

    this.props.onFileUpload(file, callback);
    return true;
  };

  render() {
    const { accept, input, avatar } = this.props;
    const dropzoneProps = {
      accept,
      multiple: false,
      onDrop: this.handleDropOrClick,
      className: styles.dropzone,
      activeClassName: styles.dropzoneActive,
      rejectClassName: styles.dropzoneFailed,
      maxSize: 8000000,
    };

    return (
      <div className={styles.wrapper}>
        <input type="hidden" disabled {...input} />
        <Dropzone {...dropzoneProps} />
      </div>
    );
  }
}

FileField.propTypes = {
  input: PropTypes.object,
  accept: PropTypes.string,
  avatar: PropTypes.object,
  onFileUpload: PropTypes.func,
};

export default FileField;