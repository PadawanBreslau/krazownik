import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import styles from './styles.scss'

const RiddleView = ({ data }) =>
  (
    <Link to={`/riddles/${data.id}`}>
    <div className={styles.riddle}>
      <h3> {data.title} </h3>
      <h4>Widoczne od: {moment(data.visibleFrom).locale('pl').format('LLL')} </h4>
      { data.content &&
        <p>{data.content}</p>
      }

      { data.answer && 
        <p>{data.answer}</p>
      }
    
    </div></Link>
  )

RiddleView.propTypes = {
  data: PropTypes.any,
}

export default RiddleView;