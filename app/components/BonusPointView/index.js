import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from 'components/MapComponent';
import BonusPointCompletionForm from 'components/BonusPointCompletionForm';
import { getFromStorage } from 'helpers/Headers';
import Logo from 'components/Logo';
import MTLogo from 'images/mt.svg';
import MCzLogo from 'images/mapycz.jpg';
import AvatarDisplay from 'components/AvatarDisplay';

import styles from './styles.scss';

export default class BonusPointView extends React.PureComponent {
  render() {
    const { bonusPoint } = this.props;
    const name = getFromStorage('name');
    const checkedNames = bonusPoint.bonusPointCompletions.filter((bpc) => bpc.completed);
    const isChecked = bonusPoint.completed;
    const label = !isChecked ? 'Zaznacz punkt bonusowy' : 'Odznacz punkt bonusowy';
    const message = !isChecked
      ? `Punkt ${bonusPoint.name} został zaznaczony`
      : `Punkt  ${bonusPoint.name} został odznaczony`;

    return (
      <div className={styles.bonusPoint}>
        <h2>{bonusPoint.name}</h2>
        <MapComponent data={[bonusPoint]} zoom={13} bonusPoints />
        <div className={styles.mapsAndCheck}>
          <div className={styles.maps}>
            <a
              href={`https://mapa-turystyczna.pl/coords/${bonusPoint.lat},${bonusPoint.lon}`}
              target="_blank"
            >
              <Logo image={MTLogo} alt="Mapa Turystyczna" />
            </a>
            <a
              href={`https://en.mapy.cz/turisticka?x=${bonusPoint.lon}&y=${
                bonusPoint.lat
              }&z=13&source=coor&id=${bonusPoint.lon}%2C${bonusPoint.lat}`}
              target="_blank"
            >
              <Logo image={MCzLogo} alt="Mapy.cz" />
            </a>
          </div>

          {name && (
            <div className={styles.check}>
              <BonusPointCompletionForm
                bonusPointId={bonusPoint.id}
                label={label}
                message={message}
                isChecked={isChecked}
              />
            </div>
          )}
        </div>

        {checkedNames.length > 0 && (
          <>
            <span className={styles.finishers}> W punkcie byli </span>
            <AvatarDisplay data={bonusPoint.bonusPointCompletions} />
          </>
        )}
      </div>
    );
  }
}

BonusPointView.propTypes = {
  bonusPoint: PropTypes.object,
};
