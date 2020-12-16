import React from 'react';
import PropTypes from 'prop-types';
import generateActions from 'redux/api/actions';
import { showUiSuccess } from 'redux/UI/actions';
import { prepareEndpoint } from 'helpers/Url';
import { withApiWrite } from 'hoc/apiHOC';
import FileUpload from 'components/FileUpload';
import styles from './styles.scss';

@withApiWrite({
  storeName: 'mediaFiles',
  formName: 'mediaFilesForm',
  api: {
    post: '/upload',
  },
  customFormOptions: {
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions('mediaFiles');
      const { loadPageData } = generateActions('Media');
      const formattedPayload = payload.toJS();
      const formattedEndpoint = prepareEndpoint(`/media/upload`, props);
      const callback = [loadPageData('/my_media'), showUiSuccess(props.message)];

      dispatch(submitPageData(formattedEndpoint, 'post', formattedPayload, callback));
    },
  },
})
export class MediaFiles extends React.PureComponent {
  render() {
    const { dispatch, files } = this.props;

    return (
      <div className={styles.trackManagement}>
        <FileUpload dispatch={dispatch} label="Przeciągnij lub upuść zdjęcia" photo />
      </div>
    );
  }
}

MediaFiles.propTypes = {
  files: PropTypes.object,
  dispatch: PropTypes.func,
};

export default MediaFiles;
