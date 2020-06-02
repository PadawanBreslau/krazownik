import React from 'react';
import PropTypes from 'prop-types';
import PhotoGallery from 'components/PhotoGallery';
import styles from './styles.scss'

export default class TeamView extends React.PureComponent {
  render() {
    const { team, extended } = this.props;

    return (
      <div className={styles.teamPage}>
      <div className={styles.team}>
         <div className={styles.name}> {team.name} </div>
         <div className={styles.logo}><img src={team.emblem}/></div>
        {team.participations &&
          <ul className={styles.userList}>
            {team.participations.map((p) => (
              <li className={styles.user} key={p.id}>{p.user}</li>
            ))}
          </ul>
        }

        {!team.participations && <span>Nikt nie został dołączony do tego zespołu</span>}
      </div>

      { extended && team.photos && team.photos.length > 0 && <PhotoGallery photos={team.photos} /> }
      </div>
    )
  }
}

TeamView.propTypes = {
  team: PropTypes.object,
}