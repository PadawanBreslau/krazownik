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
        <div>
          <h1> Lista zagadek na rok 2020</h1>
          <RiddleList data={data.payload} />
        </div>
      );
    }
    return null;
  }
}

Riddles.propTypes = {
  data: PropTypes.array,
};
