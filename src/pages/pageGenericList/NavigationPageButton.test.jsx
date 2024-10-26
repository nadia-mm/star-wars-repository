import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigationPageButtons from './NavigationPageButton';
import '@testing-library/jest-dom';

describe('NavigationPageButton Component', () => {
  let setCurrentPageMock;

  beforeEach(() => {
    setCurrentPageMock = jest.fn();
  });

  test('renders previous and next buttons', () => {
    render(
      <NavigationPageButtons
        previousPage="https://api.example.com/previous"
        nextPage="https://api.example.com/next"
        setCurrentPage={setCurrentPageMock}
      />,
    );

    expect(screen.getByLabelText('Previous page')).toBeInTheDocument();
    expect(screen.getByLabelText('Next page')).toBeInTheDocument();
  });

  test('calls setCurrentPage with previousPage on previous button click', () => {
    render(
      <NavigationPageButtons
        previousPage="https://api.example.com/previous"
        nextPage="https://api.example.com/next"
        setCurrentPage={setCurrentPageMock}
      />,
    );

    fireEvent.click(screen.getByLabelText('Previous page'));
    expect(setCurrentPageMock).toHaveBeenCalledWith(
      'https://api.example.com/previous',
    );
  });

  test('calls setCurrentPage with nextPage on next button click', () => {
    render(
      <NavigationPageButtons
        previousPage="https://api.example.com/previous"
        nextPage="https://api.example.com/next"
        setCurrentPage={setCurrentPageMock}
      />,
    );

    fireEvent.click(screen.getByLabelText('Next page'));
    expect(setCurrentPageMock).toHaveBeenCalledWith(
      'https://api.example.com/next',
    );
  });

  test('disables previous button when there is no previousPage', () => {
    render(
      <NavigationPageButtons
        previousPage={null}
        nextPage="https://api.example.com/next"
        setCurrentPage={setCurrentPageMock}
      />,
    );

    expect(screen.getByLabelText('Previous page')).toBeDisabled();
  });

  test('disables next button when there is no nextPage', () => {
    render(
      <NavigationPageButtons
        previousPage="https://api.example.com/previous"
        nextPage={null}
        setCurrentPage={setCurrentPageMock}
      />,
    );

    expect(screen.getByLabelText('Next page')).toBeDisabled();
  });
});
