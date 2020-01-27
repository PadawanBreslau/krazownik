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
    <PublicRoute component={NotFoundPage} />
  </Switch>
);

export default Routes;
