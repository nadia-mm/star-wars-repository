import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { menus } from '../Constant';
import '@testing-library/jest-dom';

jest.mock('./NavbarMobile', () => () => <div>Navbar Mobile</div>);

describe('Navbar Component', () => {
  test('renders all menu items with correct links', () => {
    render(<Navbar />);

    menus.forEach((menu) => {
      const menuItem = screen.getByText(menu);
      expect(menuItem).toBeInTheDocument();
      expect(menuItem.closest('a')).toHaveAttribute(
        'href',
        `/${menu.toLowerCase()}`,
      );
    });
  });

  test('renders NavbarMobile component', () => {
    render(<Navbar />);
    expect(screen.getByText('Navbar Mobile')).toBeInTheDocument();
  });
});
