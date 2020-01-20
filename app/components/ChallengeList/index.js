import React from 'react';
import PropTypes from 'prop-types';
import Challenge from './ChallengeShort'

const ChallengeList = ({ data }) =>
  (
    <div>
      {data.map((item) => (
        <Challenge data={item} key={item.id} />
      ))}
  </div>
  )

ChallengeList.propTypes = {
  data: PropTypes.array,
}

export default ChallengeList;