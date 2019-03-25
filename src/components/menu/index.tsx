import * as React from 'react';
import Link from 'next/link'

import { ROUTES } from '../../consts/route';

import { MenuBox } from './menu.style';

export const Menu:React.SFC = () => (
  <React.Fragment>
    <MenuBox>
      <Link href={ROUTES.ROOT}>Главная</Link>
      <Link href={ROUTES.LOGIN}>Логин</Link>
    </MenuBox>
  </React.Fragment>
)
