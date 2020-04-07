import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './styles.scss'

const RiddleView = ({ data }) =>
  (
    <div  className={styles.riddle}>
      <p className={styles.title}> {data.title} ({moment(data.visibleFrom).locale('pl').format('LT')}) </p>
      { data.content &&
        <p className={styles.riddleContent}>{data.content}</p>
      }

      { data.answer &&
        <> 
        <p className={styles.label}>Odpowiedź:</p>
        <p className={styles.riddleContent}>{data.answer}</p>
        </>
      }
    
    </div>
  )

RiddleView.propTypes = {
  data: PropTypes.any,
}

export default RiddleView;