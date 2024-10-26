import React from 'react';
import { render, screen } from '@testing-library/react';
import CardPlanet from './CardPlanet';
import '@testing-library/jest-dom';

describe('CardPlanet Component', () => {
  const props = {
    name: 'Tatooine',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1',
    terrain: 'desert',
    surface_water: '1%',
    population: '200000',
  };

  test('renders planet details correctly', () => {
    render(<CardPlanet {...props} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      props.name,
    );
    expect(
      screen.getByText(`Rotation: ${props.rotation_period}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Orbital Period: ${props.orbital_period}`),
    ).toBeInTheDocument();
    expect(screen.getByText(`Diameter: ${props.diameter}`)).toBeInTheDocument();
    expect(screen.getByText(`Climate: ${props.climate}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Gravity: ${props.gravity} kg`),
    ).toBeInTheDocument();
    expect(screen.getByText(`Terrain: ${props.terrain}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Surface Water: ${props.surface_water}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Population: ${props.population}`),
    ).toBeInTheDocument();
  });
});
