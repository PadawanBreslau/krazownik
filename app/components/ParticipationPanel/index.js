import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable'
import { Link } from 'react-router-dom'

import Select from 'components/Form/Select'
import ChallengeCompletion from './ChallengeCompletion'
import styles from './styles.scss'

function combineChallengesWithCompletions (completions, challenges){
  if(completions === undefined || completions.length === 0){
    return null;
  }

  const combined = completions.map(function(cmp){
    let chl = challenges.find((c) => (c.id === cmp.challengeId.toString()));
    return {completed: cmp.completed, title: chl.title, points: chl.points, icon: chl.icon, id: cmp.id, challengeId: chl.id  } 
  });

  return combined;
}

function ParticipationPanel({data, handleSubmit}){
  const shouldBeAbleToDraw =  !data.eventStarted && data.challengeCompletions && data.challengeCompletions.length < 3
  const completionChallenges = combineChallengesWithCompletions(data.challengeCompletions, data.challenges);
  const required = (value) => (value ? undefined : '*');

  return (
   <div>
     
  <Link to={'/events'}><div className={styles.link}>Infomacje o edycji {data.year} </div></Link>
  <Link to={'/challenges'}><div className={styles.link}>Dostępne wyzwania z edycji {data.year} </div></Link>
  <Link to={'/riddles'}><div className={styles.link}>Zagadki z edycji {data.year} </div></Link>
  <Link to={'/bonus_points'}><div className={styles.link}>Punkty bonusowe {data.year} </div></Link>



     { shouldBeAbleToDraw && 
     <div className={styles.drawing}>
      <span className={styles.info}>Możesz losować wyzwania</span>
       <form>
         <span>Wybierz maksymalną liczbę punktów </span>
         <Field component={Select} name="maxPoints" className={styles.select} validate={required}>
           <option />
           <option value="3">3 ptk</option>
           <option value="5">5 pkt</option>
           <option value="8">8 pkt</option>
           <option value="12">12 pkt</option>
         </Field>
         <button type="submit" onClick={handleSubmit} className={styles.button}>Wylosuj nowe wyzwanie</button>
       </form>
       </div>
     }

     { completionChallenges && 
       <div className={styles.challenge}>
           { completionChallenges.map((cmp) => (
             <ChallengeCompletion data={cmp}  key={cmp.id} />
           ))}
       </div> 
     }

     
     { !shouldBeAbleToDraw && <span className={styles.info}>Wylosowałeś juz wszystkie możliwe wyzwania</span>}

     <Link to={'/panel'}><div className={styles.link}>Powrót do panelu</div></Link>
  </div>
  );
 }

ParticipationPanel.propTypes = {
  data: PropTypes.any,
  handleSubmit: PropTypes.func,
}

export default ParticipationPanel; 
