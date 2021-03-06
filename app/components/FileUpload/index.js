import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import { showUiSuccess, showUiError } from 'redux/UI/actions';
import { prepareEndpoint } from 'helpers/Url';
import generateActions from 'redux/api/actions';
import FileField from './Field';
import styles from './styles.scss';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
    };
    this.onFileUpload = this.onFileUpload.bind(this);
  }

  onFileUpload = (file, successCallback) => {
    if (!file) return;
    const { dispatch, photo } = this.props;

    const uploadConfig = photo
      ? {
          endpoint: '/media/upload',
          storeName: 'mediaFiles',
          uploadAttributeName: 'file',
        }
      : {
          endpoint: '/tracks/upload',
          storeName: 'participationTracks',
          uploadAttributeName: 'file',
        };
    const { uploadFileRequest } = generateActions(uploadConfig.storeName);
    const formattedEndpoint = prepareEndpoint(uploadConfig.endpoint, this.props);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const payload = {
        data: {
          attributes: {
            [`${uploadConfig.uploadAttributeName}`]: {
              filename: file.name,
              content_type: file.type,
              data: reader.result,
            },
          },
        },
      };
      const successCallbackAction = [showUiSuccess('Plik wgrany!')];
      successCallbackAction.push(successCallback);
      dispatch(uploadFileRequest(formattedEndpoint, payload, successCallbackAction));
    };
    reader.onprogress = () => {
      this.setState({ uploading: true });
    };
    reader.onerror = (error) => {
      this.setState({ uploading: false });
      dispatch(showUiError(error));
    };
  };

  render() {
    const { acceptedFormats, fieldName, message, label } = this.props;
    return (
      <div className={styles.uploadBox}>
        <Field
          component={FileField}
          name={fieldName}
          accept={acceptedFormats}
          onFileUpload={this.onFileUpload}
          uploading={this.state.uploading}
          uiMessage={message}
          label={label}
        />
      </div>
    );
  }
}

FileUpload.propTypes = {
  dispatch: PropTypes.func,
  message: PropTypes.object,
  acceptedFormats: PropTypes.string,
  fieldName: PropTypes.string,
  label: PropTypes.string,
};

export default FileUpload;
