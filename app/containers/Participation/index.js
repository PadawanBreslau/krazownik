/**
 *
 * UserPanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import generateActions from 'redux/api/actions';
import { prepareEndpoint } from 'helpers/Url';
import { showUiSuccess } from 'redux/UI/actions';

import withLayout from 'hoc/layoutHOC';
import withAuthentication from 'hoc/authHOC';
import { withApiReadWrite } from 'hoc/apiHOC';
import ParticipationPanel from 'components/ParticipationPanel';

@withLayout({ type: 'simplified' })
@withAuthentication()
@withApiReadWrite({
  storeName: 'participationPanel',
  formName: 'participationPanelForm',
  customFormOptions: {
    destroyOnUnmount: false,
    keepDirtyOnReinitialize: true,
    onSubmit: (payload, dispatch, props) => {
      console.log('Submitting')
      const { submitPageData } = generateActions('participationPanelForm');
      const formattedPayload = payload.toJS();
      const formattedEndpoint = prepareEndpoint('/challenges/draw', props);

      const successCallbackAction = [showUiSuccess('Challenge has been drawn')];
      console.log('Send now');

      dispatch(submitPageData(formattedEndpoint, 'post', formattedPayload, successCallbackAction));
    },
  },

  api: {
    get: '/participations/:id',
    post: '/challenges/draw'
  },
})
export default class Participation extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data, handleSubmit } = this.props;
    if (data.payload === undefined) {
      return null;
    }
    return <ParticipationPanel data={data.payload} handleSubmit={handleSubmit}/>
  }
}

Participation.propTypes = {
  data: PropTypes.object,
};
