import React from 'react';
import PropTypes from 'prop-types';
import Riddle from 'components/RiddleView'

const RiddleList = ({ data }) =>
  (
    <div>
      {data.map((item) => (
        <Riddle data={item} key={item.id} />
      ))}
  </div>
  )

RiddleList.propTypes = {
  data: PropTypes.array,
}

export default RiddleList;