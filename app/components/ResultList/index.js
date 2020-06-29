import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';
import styles from './styles.scss';
export default class ResultList extends React.PureComponent {
  render() {
    const { data } = this.props;
    return(
      <table className={styles.table}>
        <tr className={styles.header}>
          <th className={styles.cell}>Uczestnik</th>
          <th className={styles.cell}>Kilometry</th>
          <th className={styles.cell}>Podjścia</th>
          <th className={styles.cell}>Wyzwania</th>
          <th className={styles.cell}>Miejsca Bonusowe</th>
          <th className={styles.cell}>Dodatkowe</th>
          <th className={styles.cell}>Suma</th>
        </tr>
       { data.map((score) => (<Result result={score} />)) }
      </table>
    );
  }
}

ResultList.propTypes = {
  data: PropTypes.array,
};
