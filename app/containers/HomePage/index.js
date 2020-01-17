/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form/immutable';
import { getFromStorage } from 'helpers/Headers';
import withLayout from 'hoc/layoutHOC';

@withLayout({
  type: 'simplified'
})

export class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="flex-wrapper">
        Hello Krążownik my old friend
      </div>
    );
  }
}

export default HomePage;  