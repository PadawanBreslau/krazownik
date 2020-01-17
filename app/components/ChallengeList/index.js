import React from 'react';
import PropTypes from 'prop-types';
import Challenge from './Challenge'

const ChallengeList = ({ data }) =>
  (
    <div>
      {data.map((item) => (
        <Challenge data={item} />
      ))}
  </div>
  )

ChallengeList.propTypes = {
  data: PropTypes.array,
}

export default ChallengeList;