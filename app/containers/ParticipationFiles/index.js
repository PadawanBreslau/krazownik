import React from 'react';
import PropTypes from 'prop-types';
import generateActions from 'redux/api/actions';
import { showUiSuccess } from 'redux/UI/actions';
import { prepareEndpoint, redirect } from 'helpers/Url';
import { withApiWrite } from 'hoc/apiHOC';
import FileUpload from 'components/FileUpload'

@withApiWrite({
  storeName: 'participationFiles',
  formName: 'participationFilesForm',
  api: {
    post: '/upload',
  },
  customFormOptions: {
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions('participationFiles');
      const { loadPageData } = generateActions('Files')
      const formattedPayload = payload.toJS();

      const formattedEndpoint = prepareEndpoint(`/files/upload`, props);
      const callback = [
        loadPageData('/files'),
        showUiSuccess(props.message)
      ];

      dispatch(submitPageData(formattedEndpoint, 'post', formattedPayload, callback));
    },
  }
})
export class ParticipationFiles extends React.PureComponent {
  render() {
    const { dispatch } = this.props;
    console.log("container", dispatch)

    return(
      <div>
    <h1>Pliki</h1>
    <FileUpload dispatch={dispatch} />
    </div>
    );
  }
}

ParticipationFiles.propTypes = {
  data: PropTypes.array,
}

export default ParticipationFiles;