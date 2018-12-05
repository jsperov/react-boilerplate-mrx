import * as React from 'react';

import { Location } from 'history';

interface IPropsRoute {
  location: Location,
 }

export const Error404: React.SFC<IPropsRoute> = ({ location }) => (
  <section className="error-404">
    Page not found!
    used path: {location.pathname}
  </section>
)
