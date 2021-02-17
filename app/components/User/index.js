import React from 'react';
import PropTypes from 'prop-types';
import UserParticipations from './UserParticipations';
import styles from './styles.scss';

const User = ({ data }) => (
  <div className={styles.user}>
    <span className={styles.username}>{data.name}</span>
    {data.viewable && (
      <div className={styles.info}>
        <span className={styles.data}>{data.aboutMe}</span> 
        <span className={styles.data}>Rok ur: {data.birthyear}</span>
      </div>
    )}

    {data.avatar && <div className={styles.image}><img src={data.avatar} /></div>}

    { data.viewable && <UserParticipations data={data.participations}/>}
  </div>
);

User.propTypes = {
  data: PropTypes.object,
};

export default User;
