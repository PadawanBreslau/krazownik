import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';
import AvatarDisplay from 'components/AvatarDisplay';
import TeamTask from './TeamTask';

export default class TeamPanelView extends React.PureComponent {
  render() {
    const { team } = this.props;
    return (
      <div className={styles.teamPanelPage}>
        <div className={styles.panelHeader}>Panel administracji drużyny: {team.name}</div>

        {team.participations && <AvatarDisplay data={team.participations} />}

        {team.teamTasks && (
          <div className={styles.teamTasks}>
            {team.teamTasks.map((tt) => (
              <TeamTask task={tt} teamId={team.id} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

TeamPanelView.propTypes = {
  team: PropTypes.object,
};
