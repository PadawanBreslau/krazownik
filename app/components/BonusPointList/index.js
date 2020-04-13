import React from 'react';
import PropTypes from 'prop-types'
import BonusPointLabels from './BonusPointLabels'
import styles from './styles.scss'

export default class BonusPointList extends React.PureComponent {
  selectRegionPoints(region) {
    const { data } = this.props;

    return data.filter((reg) => (reg.region === region))
  }

  render(){
    const { data } = this.props;
    const regions = Array.from(new Set(data.map((bonusPoint) => (bonusPoint.region))));

    return(
      <div className={styles.bonusPointLabels}>
        {regions.map((r)=>(<BonusPointLabels key={r} data={this.selectRegionPoints(r)} region={r} />))}
      </div >
    );
  }
}

BonusPointList.propTypes = {
  data: PropTypes.array
}