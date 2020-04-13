import React from 'react';
import PropTypes from 'prop-types';
import TeamView from 'components/TeamView';
import { Link } from 'react-router-dom'

import styles from './styles.scss';

const TeamsList = ({ data }) =>
  (<div className={styles.teams}>
    { data.map((t) => (
      <Link key={t.id} to={`/teams/${t.id}`}><TeamView team={t} /></Link>
    )) }
    </div>
  )

TeamsList.propTypes = {
  data: PropTypes.array,
}

export default TeamsList;