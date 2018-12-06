import * as React from 'react';

import { Location } from 'history';

import { PageTemplate } from '../utils/page-template'

interface IPropsRoute {
  location: Location,
 }

export const Error404: React.SFC<IPropsRoute> = ({ location }) => (
  <PageTemplate>
    <section className="error-404">
      Page not found!
      used path: {location.pathname}
    </section>
  </PageTemplate>
)
