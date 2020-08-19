import React from 'react';
import PropTypes from 'prop-types';
import DataList from './DataList';
import styles from './styles.scss';

function Result({ data, challenges, bonusPoints, extraPoints }) {
  const commonChallenges = challenges.filter((chl) => chl.open);
  const bestFiveChallenges = commonChallenges.sort((chl) => -chl.points).slice(0, 5);
  const ownChallenges = challenges.filter((chl) => !chl.open);
  const commonChallengesPoints = bestFiveChallenges.reduce(
    (prVal, currVal) => prVal + currVal.points,
    0,
  );
  const ownChallengesPoints = ownChallenges.reduce((prVal, currVal) => prVal + currVal.points, 0);
  const finishedBonusPoints = bonusPoints.reduce((prVal, currVal) => prVal + currVal.points, 0);
  const pointsTogether =
    commonChallengesPoints +
    ownChallengesPoints +
    finishedBonusPoints +
    extraPoints +
    data.totalAscentPoints +
    data.totalDistancePoints;

  function feedback(points) {
    if (points === 0) {
      return 'Uzbieraj coś';
    }
    if (points < 20) {
      return 'Zacząłeś chodzić i myślisz, że możesz być z tego dumny?';
    }
    if (points < 40) {
      return 'W zeszłorocznym Krążowniku byłbyś ostatni';
    }
    if (points < 60) {
      return 'Tyle punktów to moja babcia by zdobyła';
    }
    if (points < 90) {
      return 'Całkiem nieźle. Siadaj, 3.';
    }
    if (points < 120) {
      return 'No ok, trochę się postarałeś.';
    }
    if (points < 150) {
      return 'Masz więcej punktów niż większość.';
    }
    if (points < 180) {
      return 'Wygrałbyś jakbyś się bardziej postarał';
    }
    if (points < 210) {
      return 'To już nie w kij pierdział';
    }
    if (points < 250) {
      return 'Naprawdę przesadziłeś';
    }

    return null;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Dziedzina</th>
          <th className={styles.pointsColumn}>Punkty</th>
          <th>Rozpiska</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Punkty za dystans</td>
          <td className={styles.pointsColumn}>{data.totalDistancePoints}</td>
          <td />
        </tr>
        <tr>
          <td>Punkty za wysokości</td>
          <td className={styles.pointsColumn}>{data.totalAscentPoints}</td>
          <td />
        </tr>
        <tr>
          <td>Wyzwania wspólne</td>
          <td className={styles.pointsColumn}>{commonChallengesPoints}</td>
          <td>
            <DataList data={commonChallenges} />
          </td>
        </tr>
        <tr>
          <td>Wyzwania prywatne</td>
          <td className={styles.pointsColumn}>{ownChallengesPoints}</td>
          <td>
            <DataList data={ownChallenges} />
          </td>
        </tr>
        <tr>
          <td>Punkty Bonusowe</td>
          <td className={styles.pointsColumn}>{finishedBonusPoints}</td>
          <td>
            <DataList data={bonusPoints} />
          </td>
        </tr>
        <tr>
          <td>Zdjęcia</td>
          <td className={styles.pointsColumn}>{extraPoints}</td>
          <td />
        </tr>
        <tr>
          <td>Suma</td>
          <td className={styles.pointsColumn}>{pointsTogether}</td>
          <td>{feedback(pointsTogether)}</td>
        </tr>
      </tbody>
    </table>
  );
}

Result.propTypes = {
  data: PropTypes.any,
  challenges: PropTypes.array,
  bonusPoints: PropTypes.array,
  extraPoints: PropTypes.array,
};

export default Result;
