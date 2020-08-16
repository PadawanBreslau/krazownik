import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './styles.scss';

export default class HomePageView extends React.PureComponent {
  render() {
    const { notes } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h1>Krążownik 2021 | Duszniki-Zdrój, 5-6.06.2021</h1>
            <div className={styles.notes}>
              {notes &&
                notes.map((note) => (
                  <div className={styles.note}>
                    <span className={styles.title}>
                      {note.title}{' '}
                      {moment(note.createdAt)
                        .locale('pl')
                        .format('l')}
                    </span>
                    <span className={styles.alert}>{note.content}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePageView.propTypes = {
  notes: PropTypes.array,
};
