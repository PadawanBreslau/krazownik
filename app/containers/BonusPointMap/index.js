import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';

@withApiRead({
  storeName: 'BonusPoint',
  api: {
    get: '/bonus_points/:id',
  },
})
@withLayout({
  type: 'simplified',
})
export default class BonusPointMap extends React.PureComponent {

  render() {
    const { data } = this.props;

    if (data.payload !== undefined) {
      return (
        <div>
        </div>
      );
    }
    return null;
  }
}

BonusPointMap.propTypes = {
  data: PropTypes.array,
};
