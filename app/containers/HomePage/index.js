import React from 'react';
import { Link } from 'react-router-dom'
import withLayout from 'hoc/layoutHOC';
import styles from './styles.scss'
import banner from 'images/pieniny.jpg';
import fb from 'images/fb.png';


@withLayout({
  type: 'simplified'
})

export class HomePage extends React.PureComponent {
  render() {
    return (
      <div class={styles.container}>
        <img src={banner} className={styles.banner} />

        <div className={styles.content}>
          <div className={styles.info}>
            <h1>Krążownik</h1>
            <h3>Szczawnica, 6-7.06.2020</h3>
            <span>
              Krążownik 2019 się zakończył, ale sama idea musi trwać.
              Tym razem będziemy odkrywać nieznane szlaki i lokalne browary w rejonach Beskidu Sądeckiego, Pienin, Gorców i Spiszu. A może ktoś zawędruje na Słowację? Albo w Tatry?
            </span>

            <span className={styles.alert}>
              Z uwagi na sytuację epidemiologiczną termin tegorocznego Krążownika może zostać zmieniony. Będziemy informować.
            </span>
          </div>
          <div className={styles.login}>
             <div className={styles.socialMedia}>
               <a href={'https://www.facebook.com/IrracjonalnieMaszerujacy'}><img src={fb} className={styles.fbLogo} /></a>
               <a href={"https://www.facebook.com/events/664301550682259/"}><img src={fb} className={styles.fbLogo} /></a>

             </div>
             <Link to={'/login'}><div className={styles.loginBtn}>Zaloguj się </div></Link> 
             <div className={styles.registerBtn}>Zarejestruj się </div>
             <div className={styles.contactBtn}>Napisz do nas</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;  