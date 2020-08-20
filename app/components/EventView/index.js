import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import MapComponent from 'components/MapComponent';
import styles from './styles.scss';

export default class EventView extends React.PureComponent {
  render() {
    const { data } = this.props;

    if (data.informations === undefined || data.informations === null) {
      return <h3>Wkrótce</h3>;
    }
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.location}>
            {data.informations.place} ({data.informations.baseLocation})
          </span>
          <span className={styles.date}>
            {data.informations.date &&
              moment(data.informations.date)
                .locale('pl')
                .format('LLL')}
          </span>
        </div>
        <div className={styles.address}>
          <div className={styles.urls}>
            <div className={styles.links}>
              <h1>Linki</h1>
              <a href={data.informations.url} target="_blank">
                <p className={styles.link}>Strona ośrodka - bazy</p>
              </a>
              <a href={data.informations.regulationsUrl} target="_blank">
                <p className={styles.link}>Strona regulaminu imprezy</p>
              </a>
              <a href={data.informations.fbEventUrl} target="_blank">
                <p className={styles.link}>Strona wydarzenia na FB</p>
              </a>
            </div>
            <div className={styles.contact}>
              <h1>Kontakt</h1>
              <p className={styles.info}>Telefon: 697-111-475 (Staszek) </p>
              <p className={styles.info}>
                Email: <a href="mailto:krazownik.im@gmail.com">krazownik.im@gmail.com</a>
              </p>
            </div>
          </div>
          {data.informations.lat &&
            data.informations.lon && (
              <div className={styles.map}>
                <MapComponent
                  startingPoint={[data.informations.lat, data.informations.lon]}
                  zoom={15}
                />
              </div>
            )}
        </div>
      </div>
    );
  }
}

EventView.propTypes = {
  data: PropTypes.object,
};
