import React from 'react';

const CardPlanet = ({
  name,
  rotation_period: rotationPeriod,
  orbital_period: orbitalPeriod,
  diameter,
  climate,
  gravity,
  terrain,
  surface_water: surfaceWater,
  population,
}) => (
  <div className="card">
    <h2>{name}</h2>
    <p>Rotation: {rotationPeriod}</p>
    <p>Orbital Period: {orbitalPeriod}</p>
    <p>Diameter: {diameter}</p>
    <p>Climate: {climate}</p>
    <p>Gravity: {gravity} kg</p>
    <p>Terrain: {terrain}</p>
    <p>Surface Water: {surfaceWater}</p>
    <p>Population: {population}</p>
  </div>
);

export default CardPlanet;
