import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';

@withAuthentication()
@withApiRead({
  storeName: 'Team',
  api: {
    get: '/teams/:id',
  },
})
@withLayout({
  type: 'simplified',
})
export default class Team extends React.PureComponent {
  render() {
    const { data } = this.props;


    if (data.payload !== undefined) {
      return (
        <div>
          <h1> {data.payload.name} </h1>
          {data.payload.users != undefined &&
            <ul>
              {data.payload.users.map((u) => (
                <li key={u.id}>{u.name}</li>
              ))}
            </ul>
          }
        </div>
      );
    }
    return null;
  }
}

Team.propTypes = {
  data: PropTypes.array,
};
