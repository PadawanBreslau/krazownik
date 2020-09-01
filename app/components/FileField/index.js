import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import styles from './styles.scss';

class FileField extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  handleDropOrClick = (acceptedFiles, rejectedFiles, e) => {
    let eventOrValue = e;
    const {
      input: { onChange },
      onFileUpload,
    } = this.props;
    if (e.type === 'drop') {
      if (acceptedFiles.length) {
        // FileList or [File]
        eventOrValue = (e.dataTransfer && e.dataTransfer.files) || acceptedFiles;
      } else {
        eventOrValue = null;
      }
    }
    onFileUpload(eventOrValue.target.files[0], (result) => {
      onChange(result.data.attributes.picture);
    });
  };

  render() {
    const { accept, multiple, input } = this.props;
    const selectedFile = (input && input.value && input.value[0]) || null;
    const dropzoneProps = {
      accept,
      multiple,
      onDrop: this.handleDropOrClick,
      className: styles['dropzone'],
    };

    return (
      <div className={styles.fileUpload}>
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
        <Dropzone {...dropzoneProps} />
      </div>
    );
  }
}

FileField.propTypes = {
  input: PropTypes.object,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  onFileUpload: PropTypes.func,
};

export default FileField;
