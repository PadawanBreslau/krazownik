import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import getDropzoneState from './Helpers';
import Placeholder from './Placeholder';
import styles from './styles.scss';

class FileField extends React.Component {
  handleDropOrClick = (acceptedFiles, rejectedFiles, e) => {
    console.log("handle drop or click")
    if (rejectedFiles.length > 0) return null;
    let eventOrValue = e;
    const {
      input: { onChange },
      onFileUpload,
    } = this.props;

    if (eventOrValue.type === 'drop') {
      if (acceptedFiles.length) {
        eventOrValue = (e.dataTransfer && e.dataTransfer.files) || acceptedFiles;
      } else {
        eventOrValue = null;
      }
    }

    const file = eventOrValue.target ? eventOrValue.target.files[0] : eventOrValue[0];
    const callback = (result) => {
      onChange(result.data.attributes.file);
    }
    onFileUpload(file, callback);

    console.log("After onFileUpload")
    return true;
  };

  render() {
    console.log("2")
    const { accept, input, uploading, uiMessage } = this.props;
    const selectedFile = (input && input.value && input.value[0]) || null;
    const dropzoneProps = {
      accept,
      multiple: false,
      onDrop: this.handleDropOrClick,
      className: styles.dropzone,
      activeClassName: styles.dropzoneActive,
      rejectClassName: styles.dropzoneFailed,
      maxSize: 16000000,
    };
    console.log("3")
    console.log("uiMessage", uiMessage)

    return (
      <div className={styles.wrapper}>
        <input type="hidden" disabled {...input} />
        <Dropzone             
           {...dropzoneProps} 
        >
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