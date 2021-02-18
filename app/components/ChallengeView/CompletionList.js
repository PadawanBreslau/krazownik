import React from 'react';
import PropTypes from 'prop-types';
import AvatarDisplay from 'components/AvatarDisplay';
import styles from './styles.scss';

const CompletionList = ({ data }) => (
  <div>
    <span className={styles.finishers}>Wyzwanie ukończyli:</span>
    <AvatarDisplay data={data} />
  </div>
);

CompletionList.propTypes = {
  data: PropTypes.array,
};

export default CompletionList;
