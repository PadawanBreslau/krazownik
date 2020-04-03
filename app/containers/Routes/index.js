import React from 'react';
import { Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PasswordSet from 'containers/PasswordSet';
import PasswordForgot from 'containers/PasswordForgot';
import Login from 'containers/Login';
import Register from 'containers/Register';
import Challenges from 'containers/Challenges'
import Challenge from 'containers/Challenge'
import Riddles from 'containers/Riddles'
import Riddle from 'containers/Riddle'
import UserPanel from 'containers/UserPanel'
import Participation from 'containers/Participation'
import Teams from 'containers/Teams'
import Team from 'containers/Team'
import BonusPoints from 'containers/BonusPoints'
import BonusPoint from 'containers/BonusPoint'
import Contact from 'containers/Contact'
import Event from 'containers/Event'

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Switch>
    <PublicRoute
      exact
      path="/"
      component={HomePage}
    />
    <PublicRoute exact path="/set_password" component={PasswordSet} />
    <PublicRoute exact path="/reset_password" component={PasswordForgot} />
    <PublicRoute exact path="/register" component={Register} /> 
    <PublicRoute exact path="/login" component={Login} />
    <PublicRoute exect path='/challenges/:id' component={Challenge} />
    <PublicRoute exect path='/challenges' component={Challenges} />
    <PublicRoute exect path='/riddles/:id' component={Riddle} />
    <PublicRoute exect path='/riddles' component={Riddles} />
    <PrivateRoute exect path='/panel' component={UserPanel} />
    <PrivateRoute exect path='/participations/:id' component={Participation} />
    <PrivateRoute exect path='/teams/:id' component={Team} />
    <PrivateRoute exect path='/teams' component={Teams} />
    <PublicRoute exect path='/contact' component={Contact} />
    <PublicRoute exect path='/bonus_points/:id' component={BonusPoint} />
    <PublicRoute exect path='/bonus_points' component={BonusPoints} />
    <PublicRoute exect path='/events' component={Event} />
    <PublicRoute component={NotFoundPage} />
  </Switch>
);

export default Routes;
