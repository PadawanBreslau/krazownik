import React from 'react';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import HomePageView from 'components/HomePageView'

@withApiRead({
  storeName: 'Notes',
  api: {
    get: '/notes',
  },
})
@withLayout({
  type: 'simplified'
})

export class HomePage extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <HomePageView notes={data.payload} />
    );
  }
}

export default HomePage;  
