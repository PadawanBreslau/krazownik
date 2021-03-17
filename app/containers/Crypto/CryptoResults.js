import React from 'react';
import PropTypes from 'prop-types';
import { withApiRead } from 'hoc/apiHOC';
import Results from 'components/CryptoPanel/Results';

@withApiRead({
  storeName: 'CryptoResults',
  api: {
    get: '/crypto/participations',
  },
})
export default class CryptoResults extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data } = this.props;
    if (data.payload === undefined) {
      return null;
    }
    return <Results data={data?.payload} />;
  }
}

CryptoResults.propTypes = {
  data: PropTypes.object,
};
