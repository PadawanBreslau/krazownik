import React from 'react';
import PropTypes from 'prop-types';
import { withApiRead } from 'hoc/apiHOC';
import ParticipantList from 'components/ParticipantList';

@withApiRead({
  storeName: 'otherParticipationPanel',
  api: {
    get: '/participations/current',
  },
})
export default class OtherParticipants extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data } = this.props;
    if (data.payload === undefined) {
      return null;
    }
    return <ParticipantList data={data.payload} />;
  }
}

OtherParticipants.propTypes = {
  data: PropTypes.object,
};
