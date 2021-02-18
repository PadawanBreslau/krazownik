import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/Avatar';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';
import styles from './styles.scss';

const AvatarDisplay = ({ data }) => (
  <div className={styles.avatarRow}>
    {data.map((d) => (
      <Link to={`/users/${d.userId}`}>
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
      </Link>
    ))}
  </div>
);

AvatarDisplay.propTypes = {
  data: PropTypes.object,
};

export default AvatarDisplay;
