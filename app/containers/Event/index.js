import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import EventView from 'components/EventView'

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
      return (
        <EventView data={data.payload} />
      );
    }
    return null;
  }
}

Event.propTypes = {
  data: PropTypes.array,
};
