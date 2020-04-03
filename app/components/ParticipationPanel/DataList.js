import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

function DataList({data}){
  return(
    <ul>
      { data.map((d) => (
        <li>{d.title}</li>
      )
      )}
    </ul>
  );
}

DataList.propTypes = {
  data: PropTypes.array,
}

export default DataList;