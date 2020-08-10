import React from 'react';
import PropTypes from 'prop-types';
import CompletionList from '../CompletionList';
import MapComponent from '../MapComponent';

const FullChallengeView = ({ challengeCompletions, locations }) => (
  <>
    {challengeCompletions && <CompletionList data={challengeCompletions} />}
    {locations && (
      <MapComponent
        challengePoints={locations}
        zoom={11}
        customStyle={{ height: '300px', width: '100%' }}
      />
    )}
  </>
);

FullChallengeView.propTypes = {
  locations: PropTypes.array,
  challengeCompletions: PropTypes.array,
};

export default FullChallengeView;
