import React from 'react';
import styles from './styles.scss';

export default class HomePageView extends React.PureComponent {
  render() {
    return(
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h1>Krążownik</h1>
            <h3>Szczawnica, 6-7.06.2020</h3>
            <span className={styles.alert}>
              Z uwagi na sytuację epidemiologiczną termin tegorocznego Krążownika może zostać zmieniony. Będziemy informować.
            </span>
          </div>
        </div>
      </div>
    )
  }
}