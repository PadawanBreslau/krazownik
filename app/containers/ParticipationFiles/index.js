import React from 'react';
import PropTypes from 'prop-types';
import generateActions from 'redux/api/actions';
import { showUiSuccess } from 'redux/UI/actions';
import { prepareEndpoint } from 'helpers/Url';
import { withApiWrite } from 'hoc/apiHOC';
import FileUpload from 'components/FileUpload';
import FileList from 'components/FileList';
import TracksPresentation from 'components/TracksPresentation';
import styles from './styles.scss';

@withApiWrite({
  storeName: 'participationFiles',
  formName: 'participationFilesForm',
  api: {
    post: '/upload',
  },
  customFormOptions: {
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions('participationFiles');
      const { loadPageData } = generateActions('Files');
      const formattedPayload = payload.toJS();
      const formattedEndpoint = prepareEndpoint(`/tracks/upload`, props);
      const callback = [loadPageData('/tracks'), showUiSuccess(props.message)];

      dispatch(submitPageData(formattedEndpoint, 'post', formattedPayload, callback));
    },
  },
})
export class ParticipationFiles extends React.PureComponent {
  render() {
    const { dispatch, files } = this.props;

    return (
      <div className={styles.trackManagement}>
        <FileUpload dispatch={dispatch} label="Przeciągnij lub upuść pliki GPX" />
        <TracksPresentation files={files.payload} />
        {false && files && files.payload.length > 0 && <FileList files={files.payload} />}
      </div>
    );
  }
}

ParticipationFiles.propTypes = {
  files: PropTypes.object,
  dispatch: PropTypes.func,
};

export default ParticipationFiles;
