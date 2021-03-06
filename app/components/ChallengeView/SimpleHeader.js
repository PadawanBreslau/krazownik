import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const SimpleHeader = ({ data }) => (
  <div>
    <Link to={`/challenges/${data.id}`}>
      <div className={styles.title}>
        {data.title} ({data.points} pkt)
      </div>
      <div className={styles.icon}>
        <img src={data.icon} alt={data.name} />
      </div>
      <div className={styles.description}>{data.description}</div>
    </Link>
  </div>
);

SimpleHeader.propTypes = {
  data: PropTypes.object,
};

export default SimpleHeader;
