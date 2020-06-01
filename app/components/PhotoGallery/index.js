import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';
import Gallery from 'react-image-gallery'
import "./image-gallery.scss";

export default class PhotoGallery extends React.Component {
  render() {
    const { photos } = this.props;
    const backendUrl = config.api.url;
    const images = photos.map((photo)=>(
      {
         original: backendUrl + photo.url,
         thumbnail: backendUrl + photo.thumb, 
      }
    ))

    return (
      <Gallery items={images} />
    )
  }
}

PhotoGallery.propTypes = {
  photos: PropTypes.array,
}
