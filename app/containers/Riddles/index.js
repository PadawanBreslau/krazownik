import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import RiddleList from 'components/RiddleList'

@withAuthentication()
@withApiRead({
  storeName: 'Riddles',
  api: {
    get: '/riddles',
  },
})
@withLayout({
  type: 'simplified',
})
export default class Riddles extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data.payload.length > 0) {
      return (
        <RiddleList data={data.payload} />
      );
    }
    return null;
  }
}

Riddles.propTypes = {
  data: PropTypes.array,
};
