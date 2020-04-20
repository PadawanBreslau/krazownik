import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isLoggedIn } from 'helpers/User';
import BonusPointCompletionForm from 'components/BonusPointCompletionForm'

import styles from './styles.scss';


export default class PopupContent extends React.PureComponent {
  render() {
    const { bonusPoint } = this.props;
    const label = bonusPoint.completed ? "Odznacz punkt bunusowy" : "Zaznacz punkt bonusowy"
    const message = bonusPoint.completed ? `Punkt bonusowy ${bonusPoint.name} odznaczony` : `Punkt bonusowy ${bonusPoint.name} zaznaczony`

    return (
      <div className={styles.popup}>
      <Link to={`/bonus_points/${bonusPoint.id}`}>
        <div className={styles.bonusPointLabel}>{bonusPoint.name} ({bonusPoint.points} pkt)</div>
      </Link>
      <img src={bonusPoint.photo} alt={bonusPoint.name} />
      {isLoggedIn() && <BonusPointCompletionForm bonusPointId={bonusPoint.id} label={label} message={message} />}
      </div>
    );
  }
}

PopupContent.propTypes = {
  bonusPoint: PropTypes.object
}
