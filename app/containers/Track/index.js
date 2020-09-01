import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiReadWrite } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import TrackView from 'components/TrackView';
import generateActions from 'redux/api/actions';
import { prepareEndpoint } from 'helpers/Url';

@withAuthentication()
@withApiReadWrite({
  storeName: 'Track',
  formName: 'TrackForm',
  api: {
    get: '/tracks/:id',
  },
  customFormOptions: {
    onSubmit: (payload, dispatch, props) => {
      const { submitPageData } = generateActions('Track');

      const formattedPayload = payload.toJS();
      const formattedEndpoint = prepareEndpoint(`/tracks/${formattedPayload.id}`, props);

      dispatch(submitPageData(formattedEndpoint, 'put', formattedPayload));
    },
  },
})
@withLayout({
  type: 'simplified',
})
export class Track extends React.PureComponent {
  render() {
    const { data, handleSubmit } = this.props;

    if (data === undefined) {
      return null;
    }

    return (
      <TrackView
        data={data.payload}
        gpxPoints={data.payload.gpxPoints}
        handleSubmit={handleSubmit}
      />
    );
  }
}

Track.propTypes = {
  data: PropTypes.object,
  handleSubmit: PropTypes.func,
};

export default Track;
