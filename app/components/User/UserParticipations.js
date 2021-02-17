import React from 'react';
import PropTypes from 'prop-types';
import UserParticipation from './UserParticipation'
import styles from './styles.scss';

const UserParticipations = ({ data }) => (
  <div className={styles.participants}>
    {data.map((item) => (
        <UserParticipation item={item} />
    ))}
  </div>
);

UserParticipations.propTypes = {
  data: PropTypes.array,
};

export default UserParticipations;
