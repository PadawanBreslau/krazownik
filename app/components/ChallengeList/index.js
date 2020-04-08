import React from 'react';
import PropTypes from 'prop-types';
import Challenge from 'components/ChallengeView'
import styles from './styles.scss'

const ChallengeList = ({ data }) =>
  (
    <div className={styles.challenges}>
      {data.map((item) => (
        <Challenge data={item} key={item.id} />
      ))}
  </div>
  )

ChallengeList.propTypes = {
  data: PropTypes.array,
}

export default ChallengeList;