import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
function DataList({ data }) {
  return (
    <ul className={styles.pointList}>
      {data.map((d) => (
        <li className={styles.pointLabel} key={d.id}>
          {d.title || d.name.concat(` (${d.points})`)}
        </li>
      ))}
    </ul>
  );
}

DataList.propTypes = {
  data: PropTypes.array,
};

export default DataList;
