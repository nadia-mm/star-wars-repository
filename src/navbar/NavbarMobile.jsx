import React, { useState } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { menus } from '../Constant';
import './navbar.scss';

const NavbarMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div>
      <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
        {menus.map((menu) => (
          <a
            key={`${menu.toLowerCase()}`}
            href={`/${menu.toLowerCase()}`}
            className="menu_item"
            onClick={closeMenu}>
            {menu}
          </a>
        ))}
      </Menu>
    </div>
  );
};

export default NavbarMobile;
