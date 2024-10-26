import React from 'react';
import { render, screen } from '@testing-library/react';
import CardStarship from './CardStarship';
import '@testing-library/jest-dom';

describe('CardStarship Component', () => {
  const props = {
    name: 'Millennium Falcon',
    model: 'YT-1300',
    manufacturer: 'Corellian Engineering Corporation',
    cost_in_credits: '100000',
    length: '34.75',
    crew: '4',
    passengers: '6',
    cargo_capacity: '100000',
    consumables: '2 months',
    hyperdrive_rating: '0.5',
    MGLT: '75',
    starship_class: 'Light freighter',
  };

  test('renders starship details correctly', () => {
    render(<CardStarship {...props} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      props.name,
    );
    expect(screen.getByText(`Model: ${props.model}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Manufacturer: ${props.manufacturer}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Cost: ${props.cost_in_credits}`),
    ).toBeInTheDocument();
    expect(screen.getByText(`Length: ${props.length}`)).toBeInTheDocument();
    expect(screen.getByText(`Crew: ${props.crew} people`)).toBeInTheDocument();
    expect(
      screen.getByText(`Passengers: ${props.passengers} people`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Cargo capacity: ${props.cargo_capacity}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Consumables: ${props.consumables}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Rating: ${props.hyperdrive_rating}`),
    ).toBeInTheDocument();
    expect(screen.getByText(`MGLT: ${props.MGLT}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Starship class: ${props.starship_class}`),
    ).toBeInTheDocument();
  });
});
