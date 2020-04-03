import React from 'react';
import PropTypes from 'prop-types';
import DataList from './DataList';
import styles from './styles.scss';

function Result({data, challenges}){
  const commonChallenges = challenges.filter((chl)=>(chl.open));
  const ownChallenges = challenges.filter((chl)=>(!chl.open));
  const commonChallengesPoints = commonChallenges.reduce((prVal, currVal)=>(prVal + currVal.points), 0)
  const ownChallengesPoints = ownChallenges.reduce((prVal, currVal)=>(prVal + currVal.points), 0)

  const pointsTogether = commonChallengesPoints +  ownChallengesPoints;
  function feedback(points){
    if(points === 0){
      return 'No ogarnij się nieco'
    } else if(points < 20) {
      return "No zacząłeś chodzić i myślisz, że możesz być z tego dumny?"
    } else if(points < 40) {
      return "W zeszłorocznym Krążowniku byłbyś ostatni"
    } else if(point < 60) {
      return "Tyle punktów to moja babcia by zdobyła"
    }
  } 
  

  return(
    <table className={styles.table}>
      <tr>
        <th>Dziedzina</th>
        <th>Punkty</th>
        <th>Rozpiska</th>
      </tr>
      <tr>
         <td>Wyzwania wspólne</td>
         <td>{commonChallengesPoints}</td>
         <td><DataList data={commonChallenges}/></td>
      </tr>
      <tr>
         <td>Wyzwania prywatne</td>
         <td>{ownChallengesPoints}</td>
         <td><DataList data={ownChallenges}/></td>
      </tr>
      <tr>
         <td>Punkty Bonusowe</td>
         <td></td>
         <td></td>
      </tr>
      <tr>
         <td>Zdjęcia</td>
         <td></td>
         <td></td>
      </tr>
      <tr>
         <td>Suma</td>
         <td>{pointsTogether}</td>
         <td>{feedback(pointsTogether)}</td>
      </tr>
    </table>
  );
}

Result.propTypes = {
  data: PropTypes.any,
}

export default Result; 