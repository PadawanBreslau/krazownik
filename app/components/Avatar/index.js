import React from 'react';
import PropTypes from 'prop-types';
function Avatar({ imgSrc }) {
  return <img src={imgSrc} alt="avatar" />;
}

Avatar.propTypes = {
  imgSrc: PropTypes.string,
};

export default Avatar;
