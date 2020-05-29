import React from 'react';
import PropTypes from 'prop-types';
import DataList from './DataList';
import styles from './styles.scss';

function Result({ data, challenges, bonusPoints, extraPoints }) {
  const commonChallenges = challenges.filter((chl) => (chl.open));
  const bestFiveChallenges = commonChallenges.sort((chl) => (-chl.points)).slice(0,5);
  const ownChallenges = challenges.filter((chl) => (!chl.open));
  const commonChallengesPoints = bestFiveChallenges.reduce((prVal, currVal) => (prVal + currVal.points), 0)
  const ownChallengesPoints = ownChallenges.reduce((prVal, currVal) => (prVal + currVal.points), 0)
  const finishedBonusPoints = bonusPoints.reduce((prVal, currVal) => (prVal + currVal.points), 0)
  const pointsTogether = commonChallengesPoints + ownChallengesPoints +
    finishedBonusPoints + extraPoints + data.totalAscentPoints + data.totalDistancePoints;

  console.log("All data", data);

  function feedback(points) {
    if (points === 0) {
      return 'Uzbieraj coś'
    } else if (points < 20) {
      return "Zacząłeś chodzić i myślisz, że możesz być z tego dumny?"
    } else if (points < 40) {
      return "W zeszłorocznym Krążowniku byłbyś ostatni"
    } else if (points < 60) {
      return "Tyle punktów to moja babcia by zdobyła"
    } else if (points < 90) {
      return "Całkiem nieźle. Siadaj, 3."
    } else if (points < 120) {
      return "No ok, trochę się postarałeś."
    } else if (points < 150) {
      return "Masz więcej punktów niż większość."
    } else if (points < 180) {
      return "Wygrałbyś jakbyś się bardziej postarał"
    } else if (points < 210) {
      return "To już nie w kij pierdział"
    } else if (points < 250) {
      return "Naprawdę przesadziłeś"
    }

  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Dziedzina</th>
          <th>Punkty</th>
          <th>Rozpiska</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Punkty za dystans</td>
          <td>{data.totalDistancePoints}</td>
          <td></td>
        </tr>
        <tr>
          <td>Punkty za wysokości</td>
          <td>{data.totalAscentPoints}</td>
          <td></td>
        </tr>
        <tr>
          <td>Wyzwania wspólne</td>
          <td>{commonChallengesPoints}</td>
          <td><DataList data={commonChallenges} /></td>
        </tr>
        <tr>
          <td>Wyzwania prywatne</td>
          <td>{ownChallengesPoints}</td>
          <td><DataList data={ownChallenges} /></td>
        </tr>
        <tr>
          <td>Punkty Bonusowe</td>
          <td>{finishedBonusPoints}</td>
          <td><DataList data={bonusPoints} /></td>
        </tr>
        <tr>
          <td>Zdjęcia</td>
          <td>{extraPoints}</td>
          <td></td>
        </tr>
        <tr>
          <td>Suma</td>
          <td>{pointsTogether}</td>
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
}

export default Result; 