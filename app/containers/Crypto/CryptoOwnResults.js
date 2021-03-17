import React from 'react';
import PropTypes from 'prop-types';
import withAuthentication from 'hoc/authHOC';
import { withApiRead } from 'hoc/apiHOC';
import OwnResults from 'components/CryptoPanel/OwnResults';

@withAuthentication()
@withApiRead({
  storeName: 'CryptoOwnResult',
  api: {
    get: '/crypto/participations/own',
  },
})
export default class CryptoOwnResults extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data } = this.props;
    if (data.payload === undefined || data.payload.length === 0) {
      return null;
    }

    return <OwnResults data={data?.payload[0]} />;
  }
}

CryptoOwnResults.propTypes = {
  data: PropTypes.object,
};
