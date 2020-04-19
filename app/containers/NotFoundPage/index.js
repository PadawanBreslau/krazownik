import React from 'react';
import ErrorPageWrapper from 'components/ErrorPageWrapper';
import withLayout from 'hoc/layoutHOC';
import Image from 'images/404.png';

@withLayout({
  type: 'simplified',
})
export default class NotFound extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ErrorPageWrapper
        imgSrc={Image}
        header={"Zgubiłeś szlak, zdarza się każdemu."}
        text={"To nie jest najgorsze co mogło się zdarzyć, mogłeś zgubić się z Januszem. Albo jeszcze gorzej - być nim."}
        homeButton={{
          title: 'Wróc',
          path: '/',
        }}
        actionButton={{
          title: 'Napisz do mnie',
          href: 'mailto:st.zawadzki@gmail.com',
        }}
        padded
      />
    );
  }
}
