import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { HOME_IMAGE_URL } from '../../Constant';
import '@testing-library/jest-dom';

describe('Home Component', () => {
  test('renders Home component correctly', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Home');

    const image = screen.getByAltText('Text says I am your father');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', HOME_IMAGE_URL);
  });
});
