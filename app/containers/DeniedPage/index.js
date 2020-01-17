import React from 'react';
import withAuthentication from 'hoc/authHOC';
import ErrorPageWrapper from 'components/ErrorPageWrapper';
import Image from 'images/access-denied.png';

@withAuthentication()
export default class Denied extends React.PureComponent {
  render() {
    return (
      <ErrorPageWrapper
        imgSrc={Image}
        header="Access denied!"
        text="You do not have access to this page. Please log in as a different user."
        homeButton={{
          title: 'Go to homepage',
          path: '/',
        }}
        actionButton={{
          title: 'Login',
          path: '/login',
        }}
      />
    );
  }
}
