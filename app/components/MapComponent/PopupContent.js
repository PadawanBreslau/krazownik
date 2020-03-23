import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.scss';


export default class PopupContent extends React.PureComponent {
  render(){
    const { bonusPoint } = this.props;
    return(
      <Link to={`/bonus_points/${bonusPoint.id}`}>
        <p className={styles.bonusPointLabel}>{bonusPoint.name}</p>
        <img src={bonusPoint.photo} alt={bonusPoint.name}/>
        <p className={styles.points}>{bonusPoint.points} pkt</p>
      </Link>
    );
  }
}

PopupContent.propTypes = {
  bonusPoint: PropTypes.object
}
