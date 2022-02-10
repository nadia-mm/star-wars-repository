import React from 'react';
import './navbar.scss';
import Hamburger from 'hamburger-react';

// eslint-disable-next-line import/prefer-default-export
export const Navbar = () => (
  <>
    <div className="navbar">
      <a href="/home" className="menu_item">
        Home
      </a>
      <a href="/people" className="menu_item">
        People
      </a>
      <a href="/planets" className="menu_item">
        Planets
      </a>
      <a href="/starships" className="menu_item">
        Starships
      </a>
      <a href="/films" className="menu_item">
        Films
      </a>
    </div>
    <div className="navbar navbar__mobile">
      <Hamburger
        onToggle={(toggled) => {
          const menuList = document.getElementsByClassName('burgerMenu');
          const content = document.getElementsByClassName('content');
          if (toggled) {
            menuList[0].style.display = 'block';
            content[0].style.marginTop = '100px';
          } else {
            menuList[0].style.display = 'none';
            content[0].style.marginTop = '30px';
          }
        }}
      />

      <div className="burgerMenu">
        <a href="/people" className="menu_item">
          People
        </a>
        <a href="/planets" className="menu_item">
          Planets
        </a>
        <a href="/starships" className="menu_item">
          Starships
        </a>
        <a href="/films" className="menu_item">
          Films
        </a>
      </div>
    </div>
  </>
);
