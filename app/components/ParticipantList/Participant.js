import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Participant = ({ item }) => (
  <div className={styles.userBox}>
    {item.avatar && <img src={item.avatar} />}
    <h4>{item.name}</h4>
  </div>
);

Participant.propTypes = {
  item: PropTypes.object,
};

export default Participant;
