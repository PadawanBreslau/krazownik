import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import { withApiWrite } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import generateActions from 'redux/api/actions';
import { showUiSuccess } from 'redux/UI/actions';
import { prepareEndpoint } from 'helpers/Url';
import FileField from './Field';

@withAuthentication()
@withApiWrite({
  storeName: 'postPhotoForm',
  formName: 'postPhotoForm',
})
export default class PhotoForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onFileUpload = this.onFileUpload.bind(this);
  }

  onFileUpload = (file, successCallback) => {
    if (!file) return;
    const { dispatch, taskId, teamId } = this.props;

    const uploadConfig = {
      endpoint: `/teams/${teamId}/team_tasks/${taskId}/photo`,
      storeName: 'postPhotoForm',
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

      const { loadPageData } = generateActions('TeamPanel');
      const reloadCallback = loadPageData('/teams/panel');
      const successCallbackAction = [showUiSuccess('Zdjęcie wgrane'), reloadCallback];
      successCallbackAction.push(successCallback);

      dispatch(uploadFileRequest(formattedEndpoint, payload, successCallbackAction));
    };
  };

  render() {
    const { avatar } = this.props;

    return (
      <form>
        <Field
          component={FileField}
          name="avatar"
          onFileUpload={this.onFileUpload}
          avatar={avatar}
        />
      </form>
    );
  }
}

PhotoForm.propTypes = {
  dispatch: PropTypes.func,
  userId: PropTypes.string,
  avatar: PropTypes.object,
};