import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-image-gallery';
import config from '../../config';
import './image-gallery.scss';

const PhotoGallery = ({ photos }) => {
  const backendUrl = config.api.url;
  if (photos === undefined) {
    return <h3>Brak zdjęć</h3>;
  }
  const images = photos.map((photo) => ({
    original: backendUrl + photo.url,
    thumbnail: backendUrl + photo.thumb,
  }));

  return <Gallery items={images} />;
};

PhotoGallery.propTypes = {
  photos: PropTypes.array,
};

export default PhotoGallery;
