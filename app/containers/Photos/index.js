import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';

@withLayout({
  type: 'simplified',
})
export default class Photos extends React.PureComponent {
  render() {
    return(
    <h1> Wkrótce. Nie później jak za miesiąc od jutra</h1>
    );
  }
}

Photos.propTypes = {
  data: PropTypes.array,
};
