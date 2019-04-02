import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import { GlobalStyledBox } from './global.style';
import { darkTheme } from './theme/dark.style';

import { Routes } from './route';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Normalize />
      <ThemeProvider theme={darkTheme}>
        <GlobalStyledBox>
          <Routes />
        </GlobalStyledBox>
      </ThemeProvider>
    </React.Fragment>
  </Router>,
  document.getElementById('app'),
);

