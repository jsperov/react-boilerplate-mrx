import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { darkTheme } from './theme.style';

import { App } from './route';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Normalize />
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </React.Fragment>
  </Router>,
  document.getElementById('app'),
);

