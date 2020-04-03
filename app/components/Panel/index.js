/**
 *
 * UserPanel
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ParticipationList from 'components/ParticipationList';
import InspirationalBullshit from 'components/InspirationalBullshit';
import MessageBox from 'components/MessageBox'
import JoinForm from './JoinForm';
import styles from './styles.scss';


export default class Panel extends React.PureComponent {
  render(){
    const { payload } = this.props;
    const currentYear = new Date().getFullYear();
    const availableToJoin = !payload.participations || !payload.participations.find((part)=>(part.year === currentYear))

    return(
    <>
      <MessageBox />
      <h1>Panel Użytkownika</h1>
      <h2> Witaj, {payload.name} </h2>
       { availableToJoin &&  <JoinForm /> }
       { payload.participations && <><h3>Twoje występy</h3><ParticipationList data={payload.participations} /></>}
      <InspirationalBullshit />
    </>);
  }
};

Panel.propTypes = {
  data: PropTypes.object,
}
