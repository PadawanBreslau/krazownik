import React from 'react';
import PropTypes from 'prop-types';

const CompletionList = ({ data }) => (
  <div>
    <h3>Wyzwanie ukończyli:</h3>
    {data.map((item) => (
      <p>{item.name}</p>
    ))}
  </div>
);

CompletionList.propTypes = {
  data: PropTypes.array,
};

export default CompletionList;
