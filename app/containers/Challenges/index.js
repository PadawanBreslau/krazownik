import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import ChallengeList from 'components/ChallengeList'



@withAuthentication()
@withApiRead({
  storeName: 'Challenges',
  api: {
    get: '/challenges',
  },
})
@withLayout({
  type: 'simplified',
})
export default class Challenges extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data.payload.length > 0) {
      return (
        <div>
          <h1> List of Challenges for 2020</h1>
          <ChallengeList data={data.payload} />
        </div>
      );
    }
    return null;
  }
}

Challenges.propTypes = {
  data: PropTypes.object,
};

