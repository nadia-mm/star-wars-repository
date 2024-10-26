import React from 'react';
import { render } from '@testing-library/react';
import Planet from './Planet';
import PageGeneric from '../pageGenericList/PageGenericList';
import CardPlanet from './CardPlanet';

jest.mock('../pageGenericList/PageGenericList', () => jest.fn());
jest.mock('./CardPlanet', () => jest.fn());

describe('Planet Component', () => {
  test('renders the PageGeneric component with the correct props', () => {
    const url = 'https://example.com/planet/1';
    render(<Planet url={url} />);
    expect(PageGeneric).toHaveBeenCalledWith(
      expect.objectContaining({
        url,
        title: 'Planet',
        CardComponent: CardPlanet,
      }),
      {},
    );
  });
});
