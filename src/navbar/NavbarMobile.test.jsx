import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { menus } from '../Constant';
import '@testing-library/jest-dom';

jest.mock('./NavbarMobile', () => () => <div>Navbar Mobile</div>);

describe('Navbar Component', () => {
  test('renders all menu items', () => {
    render(<Navbar />);

    menus.forEach((menu) => {
      expect(screen.getByText(menu)).toBeInTheDocument();
      expect(screen.getByText(menu).closest('a')).toHaveAttribute(
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
