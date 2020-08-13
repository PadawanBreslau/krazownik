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
    const currentMonth = new Date().getMonth();
    const availableToJoin =
      !payload.participations ||
      (currentMonth < 7 && !payload.participations.find((part) => part.year === currentYear)) ||
      (currentMonth > 6 && !payload.participations.find((part) => part.year === currentYear + 1));

    return (
      <div className={styles.panel}>
        <div className={styles.boxes}>
          <div className={styles.data}>
            <h2>Twoje dane</h2>
            {payload.id && <EditForm userId={payload.id} />}
          </div>
          <div className={styles.data}>
            <h2>Twoje występy</h2>
            {payload.participations && <ParticipationList data={payload.participations} />}
            {availableToJoin && <JoinForm />}
          </div>
        </div>

        <InspirationalBullshit />
      </div>
    );
  }
}

Panel.propTypes = {
  payload: PropTypes.any,
};
