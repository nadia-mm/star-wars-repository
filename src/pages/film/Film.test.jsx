import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Film from './Film';
import '@testing-library/jest-dom';

jest.mock('./films', () => ({
  films: [
    { id: 1, title: 'Film One', summary: 'Summary of film one.' },
    { id: 2, title: 'Film Two', summary: 'Summary of film two.' },
    { id: 3, title: 'Another Film', summary: 'Summary of another film.' },
  ],
}));

describe('Film Component', () => {
  test('renders correctly', () => {
    render(<Film />);
    expect(screen.getByText('Films')).toBeInTheDocument();
  });

  test('displays all films by default', () => {
    render(<Film />);
    expect(screen.getByText('Film One')).toBeInTheDocument();
    expect(screen.getByText('Film Two')).toBeInTheDocument();
    expect(screen.getByText('Another Film')).toBeInTheDocument();
  });

  test('filters films based on search input', () => {
    render(<Film />);
    fireEvent.change(screen.getByPlaceholderText('Search film...'), {
      target: { value: 'One' },
    });

    expect(screen.getByText('Film One')).toBeInTheDocument();
    expect(screen.queryByText('Film Two')).not.toBeInTheDocument();
    expect(screen.queryByText('Another Film')).not.toBeInTheDocument();
  });

  test('displays message when no results are found', () => {
    render(<Film />);
    fireEvent.change(screen.getByPlaceholderText('Search film...'), {
      target: { value: 'Nonexistent Film' },
    });

    expect(screen.getByText('No results found')).toBeInTheDocument();
  });
});
