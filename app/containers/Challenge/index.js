import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import ChallengeView from 'components/ChallengeView';

@withAuthentication()
@withApiRead({
  storeName: 'Challenge',
  api: {
    get: '/challenges/:id',
  },
})
@withLayout({
  type: 'simplified',
})
export default class Challenge extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data.payload) {
      return <ChallengeView data={data.payload} />;
    }
    return null;
  }
}

Challenge.propTypes = {
  data: PropTypes.object,
};
