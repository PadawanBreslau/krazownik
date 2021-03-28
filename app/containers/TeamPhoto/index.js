import React from 'react';
import PropTypes from 'prop-types';
import { showUiSuccess } from 'redux/UI/actions';
import withLayout from 'hoc/layoutHOC';
import { withApiReadWrite } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import generateActions from 'redux/api/actions';
import { prepareEndpoint } from 'helpers/Url';
import PhotoDetails from 'components/TeamView/PhotoDetails';

@withAuthentication()
@withApiReadWrite({
  storeName: 'TeamPhoto',
  formName: 'TeamPhotoForm',
  api: {
    get: '/team_task_photos/:id',
  },
  customFormOptions: {
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions('TeamPhoto');
      const formattedPayload = payload.toJS();
      const leaderApproval = !formattedPayload.approvedByLeader;
      const label = leaderApproval ? 'Zdjęcie zostało zaakceptowane' : 'Akceptacja cofnięta'
      const formattedEndpoint = prepareEndpoint(`/team_task_photos/${formattedPayload.id}`, props);
      const successCallback = [showUiSuccess(label)];

      dispatch(submitPageData(formattedEndpoint, 'put', {approvedByLeader: leaderApproval}, successCallback));
    },
  },

})
@withLayout({
  type: 'simplified',
})
export default class TeamPhoto extends React.PureComponent {
  render() {
    const { data, handleSubmit } = this.props;

    if (data.payload !== undefined) {
      return <PhotoDetails data={data.payload} handleSubmit={handleSubmit} />
    }
    return null;
  }
}

TeamPhoto.propTypes = {
  data: PropTypes.array,
};
