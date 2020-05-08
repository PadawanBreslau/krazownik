import React from 'react';
import PropTypes from 'prop-types';
import banner from 'images/pieniny-panorama.jpg';
import styles from './styles.scss'

export default class EventView extends React.PureComponent {
  render() {
    const { data } = this.props;
    if (data.informations === undefined || data.informations === null) {
      return (<h3>Wkrótce</h3>);
    }

    return (
      <div className={styles.container}>
        <img src={banner} alt="Panorama Pienin" />
        <div className={styles.content}>
          <div className={styles.header}>Krążownik - edycja {data.year}</div>
          {data.informations.place &&
            <div className={styles.info}>
              <span className={styles.label}>Miejsce:</span>
              <span className={styles.value}>{data.informations.place}</span>
            </div>
          }
          {data.informations.date &&
            <div className={styles.info}>
              <span className={styles.label}>Termin:</span>
              <span className={styles.value}>{data.informations.date}</span>
            </div>
          }

         {data.informations.baseLocation &&
            <div className={styles.info}>
              <span className={styles.label}>Baza zawodów:</span>
              <span className={styles.value}>{data.informations.baseLocation}</span>
            </div>
          }

         {data.informations.baseLocationUrl &&
            <div className={styles.info}>
              <span className={styles.label}>Baza zawodów: </span>
              <span className={styles.value}><a href={data.informations.baseLocationUrl}> Strona WWW </a></span>
            </div>
          }

        </div>
      </div>
    );
  }
}

EventView.propTypes = {
  data: PropTypes.object,
};
