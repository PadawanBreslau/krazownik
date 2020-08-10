import React from 'react';
import PropTypes from 'prop-types';
import CompletionList from '../CompletionList';
import MapComponent from '../MapComponent';

const FullChallengeView = ({ challengeCompletions, locations }) => (
  <>
    {locations && (
      <MapComponent
        challengePoints={locations}
        zoom={11}
        customStyle={{ height: '300px', width: '100%' }}
      />
    )}
    {challengeCompletions &&
      challengeCompletions.filter((cc) => cc.completed).length > 0 && (
        <CompletionList data={challengeCompletions} />
      )}
  </>
);

FullChallengeView.propTypes = {
  locations: PropTypes.array,
  challengeCompletions: PropTypes.array,
};

export default FullChallengeView;
