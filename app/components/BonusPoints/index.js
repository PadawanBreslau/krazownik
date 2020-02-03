import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const BonusPoints = ({ data, region }) =>
  (
    <div>
      <h1>{region}</h1>
      <ul>
        {data.map((d)=>(<li key={d.id}> <Link to={`/bonus_points/${d.id}`}> {d.name} </Link> </li>))}
      </ul>
    </div>
  )

BonusPoints.propTypes = {
  data: PropTypes.array,
}

export default BonusPoints; 