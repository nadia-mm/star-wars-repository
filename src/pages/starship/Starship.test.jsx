import React from 'react';
import { render } from '@testing-library/react';
import Starship from './Starship';
import PageGeneric from '../pageGenericList/PageGenericList';
import CardStarship from './CardStarship';

jest.mock('../pageGenericList/PageGenericList', () => jest.fn());
jest.mock('./CardStarship', () => jest.fn());

describe('Starship Component', () => {
  test('renders the PageGeneric component with the correct props', () => {
    const url = 'https://example.com/starship/1';
    render(<Starship url={url} />);
    expect(PageGeneric).toHaveBeenCalledWith(
      expect.objectContaining({
        url,
        title: 'Starships',
        CardComponent: CardStarship,
      }),
      {},
    );
  });
});
