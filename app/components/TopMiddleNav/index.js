/**
 *
 * TopMiddleNav
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';

export default function TopMiddleNav() {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink to="/searches" activeClassName={styles.active}>
          <span className={styles.label}>Search candidates</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/jobs" activeClassName={styles.active}>
          <span className={styles.label}>Manage positions</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/my_candidates" activeClassName={styles.active}>
          <span className={styles.label}>My candidates</span>
        </NavLink>
      </li>
    </ul>
  );
}
