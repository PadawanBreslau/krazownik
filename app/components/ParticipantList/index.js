import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import Participant from './Participant';

const ParticipantList = ({ data }) => (
  <div className={styles.participants}>
    {data.map((item) => (
      <Link to={`users/${item.id}`} key={item.id}>
        <Participant item={item} />
      </Link>
    ))}
  </div>
);

ParticipantList.propTypes = {
  data: PropTypes.array,
};

export default ParticipantList;
