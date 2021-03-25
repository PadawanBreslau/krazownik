import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import styles from './styles.scss';

export default class TeamView extends React.PureComponent {
  render() {
    const { team, extended } = this.props;

    return (
      <div className={styles.teamPage}>
        <div className={styles.team}>
          <div className={styles.name}> {team.name} </div>
          <div className={styles.logo}>
            <img src={team.emblem} alt="Team emblem" />
          </div>
          {team.participations && (
            <ul className={styles.userList}>
              {team.participations.map((p) => (
                <li className={styles.user} key={p.id}>
                  {p.user}
                </li>
              ))}
            </ul>
          )}

          { team.own && <Link to='/teams/panel'><Button><button>Panel Drużyny</button></Button></Link>}
        </div>
      </div>
    );
  }
}

TeamView.propTypes = {
  team: PropTypes.object,
  extended: PropTypes.bool,
};
