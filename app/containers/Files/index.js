import React from 'react';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import ParticipationFiles from 'containers/ParticipationFiles'

@withAuthentication()
@withApiRead({
  storeName: 'Files',
  api: {
    get: '/files',
  },
})
@withLayout({
  type: 'simplified'
})
export class Files extends React.PureComponent {
  render() {
    const { data } = this.props;
    return (
      <ParticipationFiles files={data} />
    );
  }
}

export default Files;  
