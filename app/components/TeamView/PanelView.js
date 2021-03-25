import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import AvatarDisplay from 'components/AvatarDisplay';


export default class TeamPanelView extends React.PureComponent {
  render() {
    const { team } = this.props;

    return (
      <div className={styles.teamPanelPage}>
        <div className={styles.panelHeader}>
           Panel administracji drużyny: {team.name}
        </div>

        {team.participations && <AvatarDisplay data={team.participations}/> }

      </div>
    );
  }
}

TeamPanelView.propTypes = {
  team: PropTypes.object,
};
