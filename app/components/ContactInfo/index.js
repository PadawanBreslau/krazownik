import React from 'react';
import styles from './styles.scss'

export default class ContactBox extends React.PureComponent {
  render() {
    return (
        <div className={styles.contactBox}>
          <h3>Dane Kontaktowe</h3>
            <p><span>E-mail:</span><span className={styles.email}> krazownik.im@gmail.com</span></p>
            <p><span>Telefon</span><span className={styles.email}> 697-111-475</span></p>
        </div>
    );
  }
}

