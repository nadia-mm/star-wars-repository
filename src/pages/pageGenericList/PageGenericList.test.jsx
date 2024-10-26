import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useQuery } from 'react-query';
import PageGenericList from './PageGenericList';
import '@testing-library/jest-dom';

jest.mock('react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('../../api/fetchData', () => ({
  fetchData: jest.fn(),
}));

jest.mock('../error/Error', () => ({ message }) => <div>{message}</div>);

const MockCardComponent = () => <div>Card Component</div>;

describe('PageGenericList Component', () => {
  const title = 'Test Title';
  const url = 'https://api.example.com/data';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state', () => {
    useQuery.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });

    render(
      <PageGenericList
        url={url}
        title={title}
        CardComponent={MockCardComponent}
      />,
    );

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('renders error state', () => {
    useQuery.mockReturnValue({
      isLoading: false,
      error: 'An error occurred',
      data: null,
    });

    render(
      <PageGenericList
        url={url}
        title={title}
        CardComponent={MockCardComponent}
      />,
    );

    expect(screen.getByText('An error occurred')).toBeInTheDocument();
  });

  test('renders data state', async () => {
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        previous: null,
        next: null,
        results: [{ name: 'Item 1' }, { name: 'Item 2' }],
      },
    });

    render(
      <PageGenericList
        url={url}
        title={title}
        CardComponent={MockCardComponent}
      />,
    );

    await waitFor(() => {
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getAllByText('Card Component')).toHaveLength(2);
    });
  });
});
