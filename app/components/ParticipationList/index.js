import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const ParticipationList = ({ data }) => (
  <div>
    {data.map((item) => (
      <Link to={`/participations/${item.id}`} key={item.id}>
        <div className={styles.participationDiv}>{item.year}</div>
      </Link>
    ))}
  </div>
);

ParticipationList.propTypes = {
  data: PropTypes.array,
};

export default ParticipationList;
