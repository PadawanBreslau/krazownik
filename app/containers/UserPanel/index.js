/**
 *
 * UserPanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import withAuthentication from 'hoc/authHOC';
import { withApiRead } from 'hoc/apiHOC';
import Panel from 'components/Panel';

@withLayout({ type: 'simplified' })
@withAuthentication()
@withApiRead({
  storeName: 'userPanel',
  api: {
    get: '/panel',
  },
})
export default class UserPanel extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    const { data } = this.props;
    if (data.payload === undefined) {
      return null;
    }
    return (<Panel payload={data.payload} />);
  }
}

UserPanel.propTypes = {
  data: PropTypes.object,
};
