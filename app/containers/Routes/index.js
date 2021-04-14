import React from 'react';
import { Switch } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PasswordSet from 'containers/PasswordSet';
import PasswordForgot from 'containers/PasswordForgot';
import Login from 'containers/Login';
import Register from 'containers/Register';
import Challenges from 'containers/Challenges';
import Challenge from 'containers/Challenge';
import Riddles from 'containers/Riddles';
import Riddle from 'containers/Riddle';
import UserPanel from 'containers/UserPanel';
import Participation from 'containers/Participation';
import Teams from 'containers/Teams';
import Team from 'containers/Team';
import TeamPhoto from 'containers/TeamPhoto';
import TeamPanel from 'containers/TeamPanel';
import BonusPoints from 'containers/BonusPoints';
import GpxPoints from 'containers/GpxPoints';
import BonusPoint from 'containers/BonusPoint';
import Event from 'containers/Event';
import Results from 'containers/Results';
import Photos from 'containers/Photos';
import Track from 'containers/Track';
import Tracks from 'containers/Tracks';
import MyMedia from 'containers/MyMedia';
import TrackAll from 'containers/TrackAll';
import Privacy from 'containers/Privacy';
import Extra from 'containers/Extra';
import UserProfile from 'containers/UserProfile';
import Crypto from 'containers/Crypto';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
``;

const Routes = () => (
  <Switch>
    <PublicRoute exact path="/" component={Extra} />
    <PublicRoute exect path="/privacy" component={Privacy} />
    <PublicRoute exact path="/set_password" component={PasswordSet} />
    <PublicRoute exact path="/reset_password" component={PasswordForgot} />
    <PublicRoute exact path="/register" component={Register} />
    <PublicRoute exact path="/login" component={Login} />
    <PrivateRoute exect path="/users/:id" component={UserProfile} />
    <PrivateRoute exect path="/panel" component={UserPanel} />
    <PrivateRoute exect path="/participations/:id" component={Participation} />
    <PublicRoute exect path="/events" component={Event} />
    <PublicRoute exect path="/results" component={Results} />

    <PublicRoute exect path="/challenges/:id" component={Challenge} />
    <PublicRoute exect path="/challenges" component={Challenges} />

    <PublicRoute exect path="/riddles/:id" component={Riddle} />
    <PublicRoute exect path="/riddles" component={Riddles} />
    <PublicRoute exect path="/riddles" component={Riddles} />
    <PrivateRoute exect path="/crypto" component={Crypto} />

    <PublicRoute exect path="/teams/panel" component={TeamPanel} />
    <PublicRoute exect path="/teams/:id" component={Team} />
    <PublicRoute exect path="/teams" component={Teams} />
    <PrivateRoute exect path="/team_photos/:id" component={TeamPhoto} />

    <PublicRoute exect path="/bonus_points/:id" component={BonusPoint} />
    <PublicRoute exect path="/bonus_points" component={BonusPoints} />

    <PublicRoute exect path="/gpx_points" component={GpxPoints} />

    <PrivateRoute exect path="/my_media" component={MyMedia} />
    <PublicRoute exect path="/photos" component={Photos} />

    <PrivateRoute exect path="/tracks/:id/all" component={TrackAll} />
    <PublicRoute exect path="/tracks/:id" component={Track} />
    <PrivateRoute exect path="/tracks" component={Tracks} />

    <PublicRoute component={NotFoundPage} />
  </Switch>
);

export default Routes;
