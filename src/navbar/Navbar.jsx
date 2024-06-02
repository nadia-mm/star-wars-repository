import React from 'react';
import './navbar.scss';
import { menus } from '../Constant';
import NavbarMobile from './NavbarMobile';

const Navbar = () => (
  <>
    <div data-cy="menus" className="navbar">
      {menus.map((menu) => (
        <a
          key={menu.toLowerCase()}
          href={`/${menu.toLowerCase()}`}
          className="menu-item">
          {menu}
        </a>
      ))}
    </div>
    <NavbarMobile />
  </>
);

export default Navbar;
