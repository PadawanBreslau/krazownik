import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import { Tooltip } from 'react-tippy';
import styles from './styles.scss';

function AvatarDisplay({ data }) {
  return (
    <div className={styles.avatarRow}>
      {data.map((d) => (
        <div className={styles.avatar}>
          <Tooltip
            title={d.name}
            position="bottom"
            arrow="true"
            theme="light"
            className={styles.tooltip}
          >
            <Avatar imgSrc={d.avatar} />
          </Tooltip>
        </div>
      ))}
    </div>
  );
}

AvatarDisplay.propTypes = {
  data: PropTypes.object,
};

export default AvatarDisplay;
