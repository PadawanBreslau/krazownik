/**
 *
 * UserPanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ParticipationList from 'components/ParticipationList';
import InspirationalBullshit from 'components/InspirationalBullshit';

const Panel = ({payload}) => (
    <>
      <h1>Panel Użytkownika</h1>
      <h2> Witaj, {payload.name} </h2>

      { payload.participations && <><h3>Twoje występy</h3><ParticipationList data={payload.participations} /></>}
      <InspirationalBullshit />
    </>
);

Panel.propTypes = {
  data: PropTypes.object,
}

export default Panel;