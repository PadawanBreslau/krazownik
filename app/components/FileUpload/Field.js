import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import getDropzoneState from './Helpers';
import Placeholder from './Placeholder';
import styles from './styles.scss';

class FileField extends React.Component {
  handleDropOrClick = (acceptedFiles, rejectedFiles, e) => {
    if (rejectedFiles.length > 0) return null;
    let eventOrValue = e;
    const {
      input: { onChange },
      onFileUpload,
    } = this.props;

    if (eventOrValue.type === 'drop') {
      if (acceptedFiles.length) {
        // FileList or [File]
        eventOrValue = (e.dataTransfer && e.dataTransfer.files) || acceptedFiles;
      } else {
        eventOrValue = null;
      }
    }

    const file = eventOrValue.target ? eventOrValue.target.files[0] : eventOrValue[0];
    onFileUpload(file, (result) => {
      onChange(result.data.attributes.picture);
    });

    return true;
  };

  render() {
    const { accept, input, uploading, uiMessage } = this.props;
    const selectedFile = (input && input.value && input.value[0]) || null;
    const dropzoneProps = {
      accept,
      multiple: false,
      onDrop: this.handleDropOrClick,
      className: styles.dropzone,
      activeClassName: styles.dropzoneActive,
      rejectClassName: styles.dropzoneFailed,
      maxSize: 10000000,
    };

    return (
      <div className={styles.wrapper}>
        <input type="hidden" disabled {...input} />
        {selectedFile && (
          <div className={styles.avatar}>
            <img
              src={selectedFile.preview ? selectedFile.preview : input.value}
              alt="avatar"
              className={styles['avatar-image']}
            />
          </div>
        )}
        <Dropzone {...dropzoneProps}>
          {({ acceptedFiles, rejectedFiles }) => (
            <Placeholder
              uploadState={getDropzoneState(acceptedFiles, rejectedFiles, uploading, uiMessage)}
            />
          )}
        </Dropzone>
      </div>
    );
  }
}

FileField.propTypes = {
  input: PropTypes.object,
  accept: PropTypes.string,
  onFileUpload: PropTypes.func,
  uploading: PropTypes.bool,
  uiMessage: PropTypes.object,
};

export default FileField;