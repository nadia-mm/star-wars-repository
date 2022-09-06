import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders the home page', () => {
  render(<App />);
  const homeTitle = document.getElementsByTagName('h1')[0].textContent;
  expect(homeTitle).toBe('Home');
  const homeContent = document.getElementsByTagName('p')[0].textContent;
  expect(homeContent).toBe(
    'Hello, Please search infomation about the Star Wars charaters, planets or starships',
  );
});
