import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './Error';
import '@testing-library/jest-dom';

describe('Error Component', () => {
  test('renders custom error message', () => {
    render(<Error message="Custom error occurred." />);

    expect(screen.getByText('Custom error occurred.')).toBeInTheDocument();
  });
});
