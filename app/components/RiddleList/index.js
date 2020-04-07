import React from 'react';
import PropTypes from 'prop-types';
import Riddle from 'components/RiddleView';
import styles from './styles.scss';

const RiddleList = ({ data }) =>
  (
    <div className={styles.riddleList}>
      {data.map((item) => (
        <Riddle data={item} key={item.id} />
      ))}
  </div>
  )

RiddleList.propTypes = {
  data: PropTypes.array,
}

export default RiddleList;