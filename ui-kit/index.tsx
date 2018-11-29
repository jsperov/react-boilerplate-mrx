import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './testComponents/star'

import { fn } from './example'

console.log('fn - ', fn('dsads?a=3&b=3', ['b']))

ReactDOM.render(
  <App />,
  document.getElementById('react-ui-kit'),
);

