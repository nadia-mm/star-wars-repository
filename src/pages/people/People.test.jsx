import React from 'react';
import { render } from '@testing-library/react';
import People from './People';
import PageGeneric from '../pageGenericList/PageGenericList';
import CardPeople from './CardPeople';

jest.mock('../pageGenericList/PageGenericList', () => jest.fn());
jest.mock('./CardPeople', () => jest.fn());

describe('People Component', () => {
  test('renders the PageGeneric component with the correct props', () => {
    const url = 'https://example.com/people/1';
    render(<People url={url} />);
    expect(PageGeneric).toHaveBeenCalledWith(
      expect.objectContaining({
        url,
        title: 'People',
        CardComponent: CardPeople,
      }),
      {},
    );
  });
});
