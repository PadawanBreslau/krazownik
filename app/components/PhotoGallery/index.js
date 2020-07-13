import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-image-gallery';
import config from '../../config';
import './image-gallery.scss';

const PhotoGallery = ({ props }) => {
  const backendUrl = config.api.url;
  const images = props.photos.map((photo) => ({
    original: backendUrl + photo.url,
    thumbnail: backendUrl + photo.thumb,
  }));

  return <Gallery items={images} />;
};

PhotoGallery.propTypes = {
  props: PropTypes.object,
  photos: PropTypes.array,
};

export default PhotoGallery;
