import React from 'react';
import PropTypes from 'prop-types';
import withLayout from 'hoc/layoutHOC';
import { withApiRead } from 'hoc/apiHOC';
import withAuthentication from 'hoc/authHOC';
import TeamPanelView from 'components/TeamView/PanelView';

@withAuthentication()
@withApiRead({
  storeName: 'TeamPanel',
  api: {
    get: '/teams/panel',
  },
})
@withLayout({
  type: 'simplified',
})
export default class TeamPanel extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data.payload !== undefined) {
      return <TeamPanelView team={data.payload} extended />;
    }
    return null;
  }
}

TeamPanel.propTypes = {
  data: PropTypes.array,
};
