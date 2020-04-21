import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function DataList({data}){
  return(
    <ul>
      { data.map((d) => (
        <li key={d.id}>{d.title || d.name.concat(` (${d.points})`) }</li>
      )
      )}
    </ul>
  );
}

DataList.propTypes = {
  data: PropTypes.array,
}

export default DataList;