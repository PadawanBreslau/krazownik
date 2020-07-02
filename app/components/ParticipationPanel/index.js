import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MapComponent from 'components/MapComponent'
import ChallengeCompletion from './ChallengeCompletion';
import Result from './Result';
import DrawNewChallengeForm from './DrawNewChallengeForm';
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
  const shouldBeAbleToDraw = !data.eventStarted && data.challengeCompletions && data.challengeCompletions.length < 2;
  const completionChallenges = combineChallengesWithCompletions(data.challengeCompletions, data.challenges);
  const finishedChallenges = completionChallenges ? completionChallenges.filter((chl) => (chl.completed)) : [];
  const enhancedPoints = enhanceBonusPointsCompletion(data.bonusPoints, data.bonusPointCompletions);
  const finishedPoints = enhancedPoints.filter((point) => (point.completed));
  const extraPoints = data.extra ? data.extra.points : 0.0;

  console.log("TEAN", data.team)

  return (
    <div className={styles.container}>
      <div className={styles.ownMap}>
        <MapComponent zoom={12} data={enhancedPoints} gpxPoints={data.gpxPoints} bonusPoints tracks />
      </div>
      <div className={styles.panelRight}>
        {data.team && <Link to={`/teams/${data.team.id}`}><div className={styles.button}> Menu drużyny</div>  </Link>}

        {completionChallenges &&
          <div className={styles.challenges}>
            {completionChallenges.map((cmp) => (
              <ChallengeCompletion data={cmp} key={cmp.id} />
            ))}
          </div>}

        {shouldBeAbleToDraw ?
          <DrawNewChallengeForm handleSubmit={handleSubmit} /> :
          <span className={styles.info}>Wylosowałeś juz wszystkie możliwe wyzwania</span>
        }
        <Result data={data} challenges={finishedChallenges} bonusPoints={finishedPoints} extraPoints={extraPoints} />

      </div>
    </div>
  );
}

ParticipationPanel.propTypes = {
  data: PropTypes.any,
  handleSubmit: PropTypes.func,
}

export default ParticipationPanel; 
