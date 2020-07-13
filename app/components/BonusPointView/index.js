import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from 'components/MapComponent';
import BonusPointCompletionForm from 'components/BonusPointCompletionForm';
import { getFromStorage } from 'helpers/Headers';

import styles from './styles.scss';

export default class BonusPointView extends React.PureComponent {
  render() {
    const { bonusPoint } = this.props;
    const name = getFromStorage('name');
    const checkedNames = bonusPoint.bonusPointCompletions.filter(
      (bpc) => bpc.completed && bpc.name,
    );
    const isChecked = bonusPoint.completed;
    const label = !isChecked ? 'Zaznacz punkt bonusowy' : 'Odznacz punkt bonusowy';
    const message = !isChecked
      ? `Punkt ${bonusPoint.name} został zaznaczony`
      : `Punkt  ${bonusPoint.name} został odznaczony`;

    return (
      <div className={styles.bonusPoint}>
        <h2>{bonusPoint.name}</h2>
        <MapComponent data={[bonusPoint]} zoom={13} bonusPoints />

        {checkedNames.length > 0 && (
          <>
            <span> W punkcie byli: </span>
            <ul>
              {checkedNames.map((cn) => (
                <li>{cn.name}</li>
              ))}
            </ul>
          </>
        )}
        {name && (
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

BonusPointView.propTypes = {
  bonusPoint: PropTypes.object,
};
