import React from 'react';
import { Link } from 'react-router-dom'

import withLayout from 'hoc/layoutHOC';
import styles from './styles.scss'


@withLayout({
  type: 'simplified'
})

export class Contact extends React.PureComponent {
  render() {
    return (
      <>
      <h1>Informacje kontaktowe</h1>

      <div className={styles.infoBox}>
        <p>
          <span>E-mail:</span><span className={styles.email}> krazownik.im@gmail.com</span>
          <span>Telefon</span><span className={styles.email}> 697-111-475</span>
        </p>
      </div>

      <Link to={'/'}> Powrót na główną </Link>
      </>
    );
  }
}
export default Contact;