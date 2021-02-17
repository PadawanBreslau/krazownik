import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const Challenge = ({ item }) => (
<Link to={`/challenges/${item.id}`}>
    <div className={styles.challenge}>
    <div>{item.title}</div>
    <div><img src={item.icon} /></div>
  </div>
</Link>);

Challenge.propTypes = {
  item: PropTypes.object,
};

export default Challenge;
