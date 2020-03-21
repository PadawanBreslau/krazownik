import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import MapComponent from 'components/MapComponent';

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
      <>
      <h2>{data.payload.name}</h2>
      <MapComponent data={[data.payload]} zoom={13} />
      <Link to={"/bonus_points"}>Powrót do wszystkich punktów</Link>
      </>
    );
  }
}

BonusPoint.propTypes = {
  data: PropTypes.array,
};
