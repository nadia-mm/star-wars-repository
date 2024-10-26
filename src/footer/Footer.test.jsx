import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  const { REACT_APP_SUPPORT_EMAIL } = process.env;

  test('renders footer with correct text and email link', () => {
    render(<Footer />);
    expect(screen.getByText(/All Rights Reserved 2024/g)).toBeInTheDocument();
    const emailLink = screen.getByText('Nadia MM');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      'href',
      `mailto:${REACT_APP_SUPPORT_EMAIL}`,
    );
  });
});
