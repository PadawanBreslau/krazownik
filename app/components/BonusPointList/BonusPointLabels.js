import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss'

const BonusPointLabels = ({ data, region }) =>
  (
    <div className={styles.region}>
      <span className={styles.regionLabel}>{region}</span>
      <ul>
        {data.map((d)=>(<li key={d.id} className={styles.bonusPointLabel}> <Link to={`/bonus_points/${d.id}`}> {d.name} </Link> </li>))}
      </ul>
    </div>
  )

BonusPointLabels.propTypes = {
  data: PropTypes.array,
}

export default BonusPointLabels; 