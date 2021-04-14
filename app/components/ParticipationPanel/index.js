import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MapComponent from 'components/MapComponent';
import Button from 'components/Button';
import ChallengeCompletion from './ChallengeCompletion';
import Result from './Result';
import DrawNewChallengeForm from './DrawNewChallengeForm';
import styles from './styles.scss';

function combineChallengesWithCompletions(completions, challenges) {
  if (completions === undefined || completions.length === 0) {
    return null;
  }

  const combined = completions.map((cmp) => {
    const chl = challenges.find((c) => c.id === cmp.challengeId.toString());
    return {
      completed: cmp.completed,
      title: chl.title,
      points: chl.points,
      icon: chl.icon,
      id: cmp.id,
      challengeId: chl.id,
      open: chl.open,
    };
  });

  return combined;
}

function enhanceBonusPointsCompletion(bonusPoints, bonusPointCompletions) {
  if (bonusPoints === undefined || bonusPoints === null) {
    return [];
  }

  const completedBonusPointsIds = bonusPointCompletions
    .filter((bpc) => bpc.completed)
    .map((bpc) => bpc.bonusPointId.toString());
  return bonusPoints.map((bp) => {
    const bonusPoint = bp;
    bonusPoint.completed = completedBonusPointsIds.includes(bp.id);
    return bonusPoint;
  });
}

function ParticipationPanel({ data, handleSubmit }) {
  const shouldBeAbleToDraw =
    !data.eventStarted && data.challengeCompletions && data.challengeCompletions.length < 2;
  const completionChallenges = combineChallengesWithCompletions(
    data.challengeCompletions,
    data.challenges,
  );
  const finishedChallenges = completionChallenges
    ? completionChallenges.filter((chl) => chl.completed)
    : [];
  const enhancedPoints = enhanceBonusPointsCompletion(data.bonusPoints, data.bonusPointCompletions);
  const finishedPoints = enhancedPoints.filter((point) => point.completed);
  const extraPoints = data.extra ? data.extra.points : 0.0;

  return (
    <div className={styles.container}>
      <div className={styles.panelRight}>
        {data.team && (
          <Link to="/teams/panel">
            <Button>
              <div className={styles.button}> Menu drużyny</div>{' '}
            </Button>
          </Link>
        )}

        <Link to="/tracks">
          <Button>
            <div className={styles.button}> Twoje trasy</div>{' '}
          </Button>
        </Link>

        {completionChallenges && (
          <div className={styles.challenges}>
            {completionChallenges.map((cmp) => (
              <ChallengeCompletion data={cmp} key={cmp.id} />
            ))}
          </div>
        )}

        {false && shouldBeAbleToDraw && <DrawNewChallengeForm handleSubmit={handleSubmit} />}
      </div>
      <div className={styles.ownMap}>
        <MapComponent
          zoom={12}
          data={enhancedPoints}
          gpxPoints={data.gpxPoints}
          bonusPoints
          tracks
        />
      </div>
      <Result
        data={data}
        challenges={finishedChallenges}
        bonusPoints={finishedPoints}
        extraPoints={extraPoints}
      />
    </div>
  );
}

ParticipationPanel.propTypes = {
  data: PropTypes.any,
  handleSubmit: PropTypes.func,
};

export default ParticipationPanel;
