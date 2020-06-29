import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import RiddleView from 'components/RiddleView';

@withAuthentication()
@withApiRead({
  storeName: 'Riddles',
  api: {
    get: '/riddles/:id',
  },
})
@withLayout({
  type: 'simplified',
})
export default class Riddle extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data.payload.length !== []) {
      return <RiddleView data={data.payload} />;
    }
    return null;
  }
}

Riddle.propTypes = {
  data: PropTypes.array,
};
