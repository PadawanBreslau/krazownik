import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import BonusPointView from 'components/BonusPointView'

@withApiRead({
  storeName: 'BonusPoint',
  api: {
    get: '/bonus_points/:id',
  },
})
@withLayout({
  type: 'simplified',
})
export default class BonusPoint extends React.PureComponent {
  render() {
    const { data } = this.props;

    if(data.payload === undefined || data.payload.length === 0){
      return null;
    }

    return (
      <BonusPointView bonusPoint={data.payload} />
    );
  }
}

BonusPoint.propTypes = {
  data: PropTypes.array,
};
