import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../consts/route';

import { MenuBox } from './menu.style';

export const Menu:React.SFC = () => (
  <React.Fragment>
    <MenuBox>
      <NavLink className="main-menu__link" to={ROUTES.ROOT}>Главная</NavLink>
      <NavLink className="main-menu__link" to={ROUTES.LOGIN}>Логин</NavLink>
    </MenuBox>
  </React.Fragment>
)
