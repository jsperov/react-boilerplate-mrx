import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Main } from './pages/main';
import { Login } from './pages/login';
import { Error404 } from './pages/error404';

ReactDOM.render(
  <React.Fragment>
    <HashRouter>
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route component={Error404} />
        </Switch>
      </div>
    </HashRouter>
  </React.Fragment>,
  document.getElementById('app'),
);

