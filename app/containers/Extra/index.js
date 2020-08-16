import React from 'react';
import styles from './styles.scss';
import ExtraBox from './ExtraBox';
import PanelIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/panel.svg';
import TeamIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/team.svg';
import RiddleIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/question.svg';
import PhotoIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/photo.svg';
import InfoIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/info-menu.svg';
import MapIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/map.svg';
import ChallengeIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/challenge.svg';
import CryptoIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/crypto.svg';
import MediaIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/media.svg';
import ResultIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/result.svg';
import HeatmapIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/heatmap.svg';
import FileIcon from '-!babel-loader!svg-react-loader?name=RegisterIcon!images/icons/file-add.svg';
import { isLoggedIn } from 'helpers/User';
import withLayout from 'hoc/layoutHOC';
import withAuthentication from 'hoc/authHOC';

@withAuthentication()
@withLayout({
  type: 'simplified',
})
export default class Extra extends React.PureComponent {
  render() {
    return (
      <div className={styles.extraContainer}>
        { isLoggedIn() && <ExtraBox name="Panel" icon={<PanelIcon />} url='panel' main/>}
        <ExtraBox name="Informacje" icon={<InfoIcon />} url='events' />
        <ExtraBox name="Mapa" icon={<MapIcon />} url='bonus_points' />
        <ExtraBox name="Wyzwania" icon={<ChallengeIcon />} url='challenges' />
        <ExtraBox name="Zagadki" icon={<RiddleIcon />} url='riddles' />
        <ExtraBox name="Wyzwanie Drużynowe" icon={<TeamIcon />} url='teams' />
        <ExtraBox name="Konkurs fotograficzny" icon={<PhotoIcon />} url='photos' />
        <ExtraBox name="Kryptozagadka" icon={<CryptoIcon />} url='crypto' />
        { isLoggedIn() && <ExtraBox name="Dodaj pliki" icon={<FileIcon />} url='files' main/>}
        <ExtraBox name="Media" icon={<MediaIcon />} url='photos' />
        <ExtraBox name="Wyniki" icon={<ResultIcon />} url='results' />
        <ExtraBox name="Heatmapa" icon={<HeatmapIcon />} url='gpx_points' />

      </div>
    )
  }
}