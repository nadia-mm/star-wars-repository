import React from 'react';
import { render, screen } from '@testing-library/react';
import CardPeople from './CardPeople';
import '@testing-library/jest-dom';

describe('CardPeople Component', () => {
  const props = {
    name: 'Luke Skywalker',
    mass: '77',
    birth_year: '19BBY',
    gender: 'male',
    eye_color: 'blue',
    hair_color: 'blond',
    height: '172',
    skin_color: 'fair',
  };

  test('renders person details correctly', () => {
    render(<CardPeople {...props} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      props.name,
    );
    expect(
      screen.getByText(`Birth Year: ${props.birth_year}`),
    ).toBeInTheDocument();
    expect(screen.getByText(`Gender: ${props.gender}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Eye Color: ${props.eye_color}`),
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Hair Color: ${props.hair_color}`),
    ).toBeInTheDocument();
    expect(screen.getByText(`Mass: ${props.mass} kg`)).toBeInTheDocument();
    expect(screen.getByText(`Height: ${props.height}`)).toBeInTheDocument();
    expect(
      screen.getByText(`Skin Color: ${props.skin_color}`),
    ).toBeInTheDocument();
  });
});
