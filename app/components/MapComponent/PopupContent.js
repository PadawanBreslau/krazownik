import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isLoggedIn } from 'helpers/User';
import BonusPointCompletionForm from 'components/BonusPointCompletionForm';

import styles from './styles.scss';

export default class PopupContent extends React.PureComponent {
  render() {
    const { bonusPoint } = this.props;
    const isChecked = bonusPoint.completed;
    const label = isChecked ? 'Odznacz punkt bunusowy' : 'Zaznacz punkt bonusowy';
    const message = isChecked
      ? `Punkt bonusowy ${bonusPoint.name} odznaczony`
      : `Punkt bonusowy ${bonusPoint.name} zaznaczony`;

    return (
      <div className={styles.popup}>
        <Link to={`/bonus_points/${bonusPoint.id}`}>
          <div className={styles.bonusPointLabel}>
            {bonusPoint.name} ({bonusPoint.points} pkt)
          </div>
        </Link>
        {isLoggedIn() && (
          <BonusPointCompletionForm
            bonusPointId={bonusPoint.id}
            label={label}
            message={message}
            isChecked={isChecked}
          />
        )}
      </div>
    );
  }
}

PopupContent.propTypes = {
  bonusPoint: PropTypes.object,
};
