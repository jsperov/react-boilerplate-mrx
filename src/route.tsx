import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Main } from './pages/main';
import { Login } from './pages/login';
import { Error404 } from './pages/error404';

import { ROUTES } from './consts/route'

export const App = () => (
  <Switch>
    <Route exact path={ROUTES.ROOT} component={Main} />
    <Route path={ROUTES.LOGIN} component={Login} />
    <Route path={ROUTES.NOT_FOUND} component={Error404} />
    <Redirect from='*' to='/404' />
  </Switch>
)