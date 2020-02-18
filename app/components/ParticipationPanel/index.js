import React from 'react';
import PropTypes from 'prop-types';

import ChallengeCompletion from './ChallengeCompletion'
import styles from './styles.scss'

function combineChallengesWithCompletions (completions, challenges){
  if(completions === undefined || completions.length === 0){
    return null;
  }

  const combined = completions.map(function(cmp){
    let chl = challenges.find((c) => (c.id === cmp.challengeId.toString()));
    return {completed: cmp.completed, title: chl.title, points: chl.points, icon: chl.icon} 
  });

  return combined;
};

function ParticipationPanel({data, handleSubmit}){
  const shouldBeAbleToDraw =  !data.eventStarted && data.challengeCompletions && data.challengeCompletions.length < 3
  const completionChallenges = combineChallengesWithCompletions(data.challengeCompletions, data.challenges);

  return (
   <div>
     <h1>{data.year} </h1>
     { shouldBeAbleToDraw && 
     <div className={styles.drawing}>
      <h2>Możesz losować wyzwania</h2>
       <form>
         <button type="submit" onClick={handleSubmit} className={styles.button}>Wylosuj nowe wyzwanie</button>
       </form>
       </div>
     }

     { data.challengeCompletions && 
       <div className="completions">
           { completionChallenges.map((cmp) => (
             <ChallengeCompletion data={cmp} />
           ))}
       </div> 
     }
  </div>
  );
 }

ParticipationPanel.propTypes = {
  data: PropTypes.any,
}

export default ParticipationPanel; 