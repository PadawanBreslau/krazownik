import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

const Counter = ({ title, till }) => (
  <>
    <h4>
      {title}{' '}
      {moment(till, 'YYYYMMDDHHmm')
        .locale('pl')
        .fromNow()}
    </h4>
  </>
);

Counter.propTypes = {
  title: PropTypes.string,
  till: PropTypes.string,
};

export default Counter;
