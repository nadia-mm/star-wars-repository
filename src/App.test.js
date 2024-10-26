import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders the home page', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Home');
  expect(
    screen.getByText(
      'Hello, Please search infomation about the Star Wars charaters, planets or starships',
    ),
  ).toBeInTheDocument();
});
