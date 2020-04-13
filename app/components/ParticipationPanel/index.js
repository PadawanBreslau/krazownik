import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';
import Select from 'components/Form/Select';
import MapComponent from 'components/MapComponent'
import ChallengeCompletion from './ChallengeCompletion';
import Result from './Result';
import styles from './styles.scss';

function combineChallengesWithCompletions(completions, challenges) {
  if (completions === undefined || completions.length === 0) {
    return null;
  }

  const combined = completions.map(function (cmp) {
    let chl = challenges.find((c) => (c.id === cmp.challengeId.toString()));
    return { completed: cmp.completed, title: chl.title, points: chl.points, icon: chl.icon, id: cmp.id, challengeId: chl.id, open: chl.open }
  });

  return combined;
}

function enhanceBonusPointsCompletion(bonusPoints, bonusPointCompletions) {
  if (bonusPoints === undefined || bonusPoints === null) {
    return [];
  }

  const completedBonusPointsIds = bonusPointCompletions.filter((bpc) => (bpc.completed)).map((bpc) => (bpc.bonusPointId.toString()));
  return bonusPoints.map((bp) => {
    bp.completed = completedBonusPointsIds.includes(bp.id);
    return bp;
  }
  )
}

function ParticipationPanel({ data, handleSubmit }) {
  const shouldBeAbleToDraw = !data.eventStarted && data.challengeCompletions && data.challengeCompletions.length < 3
  const completionChallenges = combineChallengesWithCompletions(data.challengeCompletions, data.challenges);
  const finishedChallenges = completionChallenges ? completionChallenges.filter((chl) => (chl.completed)) : []
  const required = (value) => (value ? undefined : '*');
  const enhancedPoints = enhanceBonusPointsCompletion(data.bonusPoints, data.bonusPointCompletions)

  return (
    <div className={styles.container}>
      <div className={styles.ownMap}>
        <MapComponent zoom={12} data={enhancedPoints} />
      </div>
      <div className={styles.panelRight}>

        {completionChallenges &&
          <div className={styles.challenges}>
            {completionChallenges.map((cmp) => (
              <ChallengeCompletion data={cmp} key={cmp.id} />
            ))}
          </div>}

        {!shouldBeAbleToDraw && <span className={styles.info}>Wylosowałeś juz wszystkie możliwe wyzwania</span>}

        {shouldBeAbleToDraw &&
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
        <Result data={data} challenges={finishedChallenges} />
      </div>
    </div>
  );
}

ParticipationPanel.propTypes = {
  data: PropTypes.any,
  handleSubmit: PropTypes.func,
}

export default ParticipationPanel; 
