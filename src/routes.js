import React from 'react';
import { Router } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/home';

export default (history) => (
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
