import React from 'react';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const PhotoSlider = ({ photos }) => {
  const backendUrl = 'http://localhost:4321/'
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const slider = (
    <AutoplaySlider
      interval={6000}
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      animation="cubeAnimation">
        
      {photos && photos.map((photo) => (
        <div><img src={backendUrl + photo.url} /></div>
      ))}
    </AutoplaySlider>
  );
  return (
    <>{slider}</>
  )
}

PhotoSlider.propTypes = {
  photos: PropTypes.array,
}

export default PhotoSlider

