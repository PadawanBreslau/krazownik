import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import ResultList from 'components/ResultList';

@withAuthentication()
@withApiRead({
  storeName: 'Results',
  api: {
    get: '/results',
  },
})
@withLayout({
  type: 'simplified',
})
export default class Results extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data.payload.length > 0) {
      return <ResultList data={data.payload} />;
    }
    return null;
  }
}

Results.propTypes = {
  data: PropTypes.array,
};
