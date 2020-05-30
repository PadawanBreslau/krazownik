/**
 *
 * UserPanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ParticipationList from 'components/ParticipationList';
import InspirationalBullshit from 'components/InspirationalBullshit';
import JoinForm from './JoinForm';
import EditForm from './EditForm';
import styles from './styles.scss';


export default class Panel extends React.PureComponent {
  render() {
    const { payload } = this.props;
    const currentYear = new Date().getFullYear();
    const availableToJoin = !payload.participations || !payload.participations.find((part) => (part.year === currentYear))

    return (
      <div className={styles.panel}>
        <div className={styles.boxes}>
          <div className={styles.data}>
            <h2>Twoje dane</h2>
            Nickname: {payload.name}
            <EditForm />
          </div>
          <div className={styles.data}>
            <h2>Twoje występy</h2>
            {payload.participations && <ParticipationList data={payload.participations} />}
            {availableToJoin && <JoinForm />}
          </div>
        </div>


        <InspirationalBullshit />
      </div>);
  }
};

Panel.propTypes = {
  data: PropTypes.object,
}
