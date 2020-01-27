import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';

@withAuthentication()
@withApiRead({
  storeName: 'Teams',
  api: {
    get: '/teams',
  },
})
@withLayout({
  type: 'simplified',
})
export default class Teams extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data.payload.length > 0) {
      return (
        <div>
          <h1> Lista drużyn na rok 2020</h1>
          <ul>
          { data.payload.map((t) => (
            <li> { t.name }</li>
          ))}
          </ul>
        </div>
      );
    }
    return null;
  }
}

Teams.propTypes = {
  data: PropTypes.array,
};
