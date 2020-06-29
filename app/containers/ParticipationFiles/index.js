import React from 'react';
import PropTypes from 'prop-types';
import generateActions from 'redux/api/actions';
import { showUiSuccess } from 'redux/UI/actions';
import { prepareEndpoint } from 'helpers/Url';
import { withApiWrite } from 'hoc/apiHOC';
import FileUpload from 'components/FileUpload';
import FileList from 'components/FileList';

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

      const formattedEndpoint = prepareEndpoint(`/files/upload`, props);
      const callback = [
        loadPageData('/files'), showUiSuccess(props.message)
      ];

      dispatch(submitPageData(formattedEndpoint, 'post', formattedPayload, callback));
    },
  }
})
export class ParticipationFiles extends React.PureComponent {
  render() {
    const { dispatch, files } = this.props;

    return (
      <div>
        <>
          <FileUpload dispatch={dispatch} />
          {files && files.payload.length > 0 && <FileList files={files.payload} />}
        </>
      </div>
    );
  }
}

ParticipationFiles.propTypes = {
  data: PropTypes.array,
}

export default ParticipationFiles;
