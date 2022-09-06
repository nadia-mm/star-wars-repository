import React from 'react';
import './navbar.scss';
import Hamburger from 'hamburger-react';
import { menus } from '../Constant';

// eslint-disable-next-line import/prefer-default-export
export const Navbar = () => (
  <>
    <div className="navbar">{menus.map((menu) => createMenuItem(menu))}</div>
    <div className="navbar navbar__mobile">
      <Hamburger
        onToggle={(toggled) => {
          const menuList = document.getElementsByClassName('burgerMenu');
          const content = document.getElementsByClassName('content');

          if (toggled) {
            menuList[0].style.display = 'block';
            content[0].style.top = '330px';
          } else {
            menuList[0].style.display = 'none';
            content[0].style.top = '40px';
          }
        }}
      />

      <div className="burgerMenu">
        {menus.map((menu) => createMenuItem(menu))}
      </div>
    </div>
  </>
);

const createMenuItem = (title) => (
  <a
    key={`${title.toLowerCase()}`}
    href={`/${title.toLowerCase()}`}
    className="menu_item">
    {title}
  </a>
);
