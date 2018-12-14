import * as React from 'react';

import { Menu } from '../components/menu';

type Props = {
  children: React.ReactChild
}

export const PageTemplate: React.SFC<Props> = ({ children }) => (
  <React.Fragment>
    <Menu />
    <section className="content">
      {children}
    </section>
  </React.Fragment>
)