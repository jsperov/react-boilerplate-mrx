import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Main } from './pages/main';
import { Login } from './pages/login';
import { Error404 } from './pages/error404';

export const App = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/login" component={Login} />
    <Route path="/404" component={Error404} />
    <Redirect from='*' to='/404' />
  </Switch>
)