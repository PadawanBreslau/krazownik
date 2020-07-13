import React from 'react';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import config from '../../config';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const PhotoSlider = ({ photos }) => {
  const backendUrl = config.api.url;
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const slider = (
    <AutoplaySlider
      interval={6000}
      play
      cancelOnInteraction={false} // should stop playing on user interaction
      animation="cubeAnimation"
    >
      {photos &&
        photos.map((photo) => (
          <div>
            <img src={backendUrl + photo.url} alt="User fed input" />
          </div>
        ))}
    </AutoplaySlider>
  );
  return <>{slider}</>;
};

PhotoSlider.propTypes = {
  photos: PropTypes.array,
};

export default PhotoSlider;
