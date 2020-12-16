import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import MediaFiles from 'containers/MediaFiles';

@withAuthentication()
@withApiRead({
  storeName: 'MyMedia',
  api: {
    get: '/media',
  },
})
@withLayout({
  type: 'simplified',
})
export class MyMedia extends React.PureComponent {
  render() {
    const { data } = this.props;
    return <MediaFiles media={data} />;
  }
}

MyMedia.propTypes = {
  data: PropTypes.object,
};

export default MyMedia;
