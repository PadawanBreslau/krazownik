import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss'

export default class TeamView extends React.PureComponent {
  render() {
    const { team, extended } = this.props;

    return (
      <>
      <div className={styles.team}>
        <div className={styles.header}>
          <div className={styles.logo}><img src={team.emblem}/></div>
          <div className={styles.name}> {team.name} </div>
        </div>
        {team.participations &&
          <ul className={styles.userList}>
            {team.participations.map((p) => (
              <li className={styles.user} key={p.id}>{p.user}</li>
            ))}
          </ul>
        }

        {!team.participations && <span>Nikt nie został dołączony do tego zespołu</span>}
      </div>
      
      { extended && <div><span>Więcej info</span></div> }
      </>
    )
  }
}

TeamView.propTypes = {
  team: PropTypes.object,
}