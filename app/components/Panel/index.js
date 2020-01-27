/**
 *
 * UserPanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({payload}) => (
    <>
      <h1>Panel Użytkownika</h1>
      <p> {payload.name} </p>
    </>
);

Panel.propTypes = {
  data: PropTypes.object,
}

export default Panel;