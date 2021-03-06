import React from 'react';
import { isLoggedIn } from 'helpers/User';
import withLayout from 'hoc/layoutHOC';
import withAuthentication from 'hoc/authHOC';
import { getFromStorage } from 'helpers/Headers';
import CookieConsent from 'react-cookie-consent';
import styles from './styles.scss';
import ExtraBox from './ExtraBox';
import PanelIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/hiker.svg';
import TrackIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/hiking2.svg';
import TeamIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/group.svg';
import RiddleIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/question2.svg';
import PhotoIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/picture.svg';
import InfoIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/info2.svg';
import MapIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/earth.svg';
import ChallengeIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/challenge.svg';
import CryptoIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/puzzle.svg';
import MediaIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/camera.svg';
import ResultIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/numbers.svg';
import HeatmapIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/hiking.svg';
import FileIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/add-file.svg';

@withAuthentication()
@withLayout({
  type: 'simplified',
})
export default class Extra extends React.PureComponent {
  hasParticipation() {
    console.log("Participation", getFromStorage('participation'));
    return new Date().getFullYear() === getFromStorage('participation');
  }

  render() {
    return (
      <>
        <div className={styles.extraContainer}>
          {isLoggedIn() && <ExtraBox name="Panel" icon={<PanelIcon />} url="panel" main />}
          {isLoggedIn() && <ExtraBox name="Trasy" icon={<TrackIcon />} url="tracks" main />}
          {false &&
            isLoggedIn() && (
              <ExtraBox name="Dodaj Zdjęcia" icon={<FileIcon />} url="my_media" main />
            )}
          <ExtraBox name="Informacje" icon={<InfoIcon />} url="events" />
          <ExtraBox name="Mapa" icon={<MapIcon />} url="bonus_points" />
          <ExtraBox name="Wyzwania" icon={<ChallengeIcon />} url="challenges" />
          <ExtraBox name="Zagadki" icon={<RiddleIcon />} url="riddles" />
          <ExtraBox name="Drużynówka" icon={<TeamIcon />} url="teams" />
          {isLoggedIn() && <ExtraBox name="Konkurs foto" icon={<PhotoIcon />} url="photos" />}
          {isLoggedIn() && this.hasParticipation() && (
              <ExtraBox name="Kryptozagadka" icon={<CryptoIcon />} url="crypto" />
            )}
          {false && <ExtraBox name="Galerie" icon={<MediaIcon />} url="photos" />}
          <ExtraBox name="Wyniki" icon={<ResultIcon />} url="results" />
          <ExtraBox name="Heatmapa" icon={<HeatmapIcon />} url="gpx_points" />
        </div>
        <CookieConsent
          location="bottom"
          buttonText="Tak"
          cookieName="krazownik-cookie"
          style={{ background: '#2B373B' }}
          buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
          expires={150}
        >
          Kliknij tu, że zgadzasz się na wykorzystywanie ciasteczek.{' '}
        </CookieConsent>
      </>
    );
  }
}
