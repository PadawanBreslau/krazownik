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
    const { onFileUpload } = this.props;

    if (eventOrValue.type === 'drop') {
      if (acceptedFiles.length) {
        eventOrValue = (e.dataTransfer && e.dataTransfer.files) || acceptedFiles;
      } else {
        eventOrValue = null;
      }
    }

    const file = eventOrValue.target ? eventOrValue.target.files[0] : eventOrValue[0];
    // const callback = (result) => {
    // FIX ME - reload file list
    //  onChange(result.data.attributes.file);
    // };
    const callback = () => undefined;
    onFileUpload(file, callback);

    return true;
  };

  render() {
    const { accept, input, uploading, uiMessage, label } = this.props;
    const dropzoneProps = {
      accept,
      multiple: false,
      onDrop: this.handleDropOrClick,
      className: styles.dropzone,
      activeClassName: styles.dropzoneActive,
      rejectClassName: styles.dropzoneFailed,
      maxSize: 12000000,
    };

    return (
      <div className={styles.wrapper}>
        <input type="hidden" disabled {...input} />
        <Dropzone {...dropzoneProps}>
          {({ acceptedFiles, rejectedFiles }) => (
            <Placeholder label={label}
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
