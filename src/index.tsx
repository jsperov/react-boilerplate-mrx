import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';

import { App } from './route';

ReactDOM.render(
  <Router history={browserHistory}>
    <App />
  </Router>,
  document.getElementById('app'),
);

