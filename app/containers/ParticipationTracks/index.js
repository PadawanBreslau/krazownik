import React from 'react';
import PropTypes from 'prop-types';
import generateActions from 'redux/api/actions';
import { showUiSuccess } from 'redux/UI/actions';
import { prepareEndpoint } from 'helpers/Url';
import { withApiWrite } from 'hoc/apiHOC';
import FileUpload from 'components/FileUpload';
import TracksPresentation from 'components/TracksPresentation';
import styles from './styles.scss';

@withApiWrite({
  storeName: 'participationTracks',
  formName: 'participationTracksForm',
  api: {
    post: '/upload',
  },
  customFormOptions: {
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions('participationTracks');
      const { loadPageData } = generateActions('Files');
      const formattedPayload = payload.toJS();
      const formattedEndpoint = prepareEndpoint(`/tracks/upload`, props);
      const callback = [loadPageData('/tracks'), showUiSuccess(props.message)];

      dispatch(submitPageData(formattedEndpoint, 'post', formattedPayload, callback));
    },
  },
})
export class ParticipationTracks extends React.PureComponent {
  render() {
    const { dispatch, files } = this.props;

    return (
      <div className={styles.trackManagement}>
        <div className={styles.upload}>
          <FileUpload dispatch={dispatch} label="Przeciągnij lub upuść pliki GPX" />
          <div className={styles.info}>Proszę odświeżyć stronę po dodaniu</div>
        </div>
        <div className={styles.files}>
          <TracksPresentation files={files.payload} />
        </div>
      </div>
    );
  }
}

ParticipationTracks.propTypes = {
  files: PropTypes.object,
  dispatch: PropTypes.func,
};

export default ParticipationTracks;
