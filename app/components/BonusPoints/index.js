import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss'



const BonusPoints = ({ data, region }) =>
  (
    <div className={styles.region}>
      <span>{region}</span>
      <ul>
        {data.map((d)=>(<li key={d.id}> <Link to={`/bonus_points/${d.id}`}> {d.name} </Link> </li>))}
      </ul>
    </div>
  )

BonusPoints.propTypes = {
  data: PropTypes.array,
}

export default BonusPoints; 