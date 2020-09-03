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
  storeName: 'editAvatarForm',
  formName: 'editAvatarForm',
})
export default class AvatarForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onFileUpload = this.onFileUpload.bind(this);
  }

  onFileUpload = (file, successCallback) => {
    if (!file) return;
    const { dispatch, userId } = this.props;

    const uploadConfig = {
      endpoint: `/users/${userId}/avatar`,
      storeName: 'editAvatarForm',
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

      const { loadPageData } = generateActions('userPanel');
      const reloadCallback = loadPageData('/panel');
      const successCallbackAction = [showUiSuccess('Ale jesteś brzydki'), reloadCallback];
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

AvatarForm.propTypes = {
  dispatch: PropTypes.func,
  userId: PropTypes.string,
  avatar: PropTypes.object,
};
