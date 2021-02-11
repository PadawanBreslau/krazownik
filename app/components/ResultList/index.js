import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Result from './Result';
import styles from './styles.scss';

const ResultList = ({ data }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const label = 'Pokaż pozostałe klasyfikacje';

  return (
    <div>
      <div className={styles.detailsSwitch} onClick={() => setDetailsVisible(!detailsVisible)}>
        <input type="checkbox" checked={detailsVisible} />
        <span className={styles.detailsSwitchLabel}>{label}</span>
      </div>

      <table className={styles.table}>
        <tr className={styles.header}>
          <th className={styles.cellHighligted}>Uczestnik</th>
          {!detailsVisible && <th className={styles.cell}>Kilometry</th>}
          {!detailsVisible && <th className={styles.cell}>Podjścia</th>}
          {!detailsVisible && <th className={styles.cell}>Wyzwania</th>}
          {detailsVisible && <th className={styles.cell}>Miejsca Bonusowe</th>}
          {detailsVisible && <th className={styles.cell}>Dodatkowe</th>}
          <th className={styles.cellHighligted}>Suma</th>
        </tr>
        {data.map((score) => (
          <Result result={score} detailsVisible={detailsVisible} />
        ))}
      </table>
    </div>
  );
};

ResultList.propTypes = {
  data: PropTypes.array,
};

export default ResultList;
