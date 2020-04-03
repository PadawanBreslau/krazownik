import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.scss';


function Links({ data }) {
  return (
    <>
      <Link to={'/events'}><div className={styles.link}>Infomacje o edycji {data.year} </div></Link>
      <Link to={'/challenges'}><div className={styles.link}>Dostępne wyzwania z edycji {data.year} </div></Link>
      <Link to={'/riddles'}><div className={styles.link}>Zagadki z edycji {data.year} </div></Link>
      <Link to={'/bonus_points'}><div className={styles.link}>Punkty bonusowe {data.year} </div></Link>
    </>);
}

Links.propTypes = {
  data: PropTypes.any,
}

export default Links; 