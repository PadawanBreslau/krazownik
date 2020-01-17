/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import ErrorPageWrapper from 'components/ErrorPageWrapper';
import Image from 'images/404.png';

export default class NotFound extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ErrorPageWrapper
        imgSrc={Image}
        header={"Ok, we think you're lost."}
        text={"Don't panic. You're just one click away from our homepage."}
        homeButton={{
          title: 'Visit homepage',
          path: '/',
        }}
        actionButton={{
          title: 'Contact us',
          href: 'mailto:team@kandidate.com',
        }}
        padded
      />
    );
  }
}
