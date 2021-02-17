import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import EventView from 'components/EventView';
import OtherParticipants from 'containers/OtherParticipants';


@withApiRead({
  storeName: 'Event',
  api: {
    get: '/events',
  },
})
@withLayout({
  type: 'simplified',
})
export default class Event extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data.payload.length !== []) {
      return(
        <div>
      <EventView data={data.payload} />
      <OtherParticipants />
      </div> 
      );
    }
    return null;
  }
}

Event.propTypes = {
  data: PropTypes.array,
};
