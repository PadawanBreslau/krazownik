import React from 'react';
import withLayout from 'hoc/layoutHOC';
import HomePageView from 'components/HomePageView'

@withLayout({
  type: 'simplified'
})

export class HomePage extends React.PureComponent {
  render() {
    return (
      <HomePageView />
    );
  }
}

export default HomePage;  
