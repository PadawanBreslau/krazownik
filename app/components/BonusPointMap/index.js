import React from 'react';
import PropTypes from 'prop-types'
import MapComponent from 'components/MapComponent';
import BonusPointList from 'components/BonusPointList'
import styles from './styles.scss'

export default class BonusPointMap extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className={styles.mapView}>
        <MapComponent data={data} zoom={10} />
        <BonusPointList data={data} />
      </div>);
  }
}

BonusPointMap.propTypes = {
  data: PropTypes.array,
}