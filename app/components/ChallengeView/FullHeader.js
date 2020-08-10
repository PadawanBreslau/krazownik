import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const FullHeader = ({ data }) => (
  <div className={styles.fullHeader}>
    <div className={styles.titleFull}>
      {data.title} ({data.points} pkt)
    </div>
    <div className={styles.descriptionFull}>{data.description}</div>
  </div>
);

FullHeader.propTypes = {
  data: PropTypes.object,
};

export default FullHeader;
