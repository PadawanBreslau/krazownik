import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import PhotoSlider from 'components/PhotoSlider'
import PhotoGallery from 'components/PhotoGallery'

@withApiRead({
  storeName: 'Photos',
  api: {
    get: '/photos',
  },
})
@withLayout({
  type: 'simplified',
})
export default class Photos extends React.PureComponent {
  render() {
    const { data } = this.props;
    return(
      <PhotoGallery photos={data.payload} />
    );
  }
}

Photos.propTypes = {
  data: PropTypes.array,
};
