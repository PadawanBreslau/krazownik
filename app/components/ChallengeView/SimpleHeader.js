import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const SimpleHeader = ({ data }) => (
  <>
    <div className={styles.title}>
      <Link to={`/challenges/${data.id}`}>
        {data.title} ({data.points} pkt)
      </Link>
    </div>
    <div className={styles.icon}>
      <img src={data.icon} alt={data.name} />
    </div>
    <span className={styles.description}>{data.description}</span>
  </>
);

SimpleHeader.propTypes = {
  data: PropTypes.object,
};

export default SimpleHeader;
