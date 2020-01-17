import React from 'react';
import { Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PasswordSet from 'containers/PasswordSet';
import PasswordForgot from 'containers/PasswordForgot';
import Login from 'containers/Login';
import Challenges from 'containers/Challenges'

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
    <PublicRoute exact path="/login" component={Login} />
    <PublicRoute exect path='/challenges' component={Challenges} />
    <PublicRoute component={NotFoundPage} />
  </Switch>
);

export default Routes;
