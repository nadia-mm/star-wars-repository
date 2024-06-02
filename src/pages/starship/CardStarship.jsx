import React from 'react';

const CardStarship = ({
  name,
  model,
  manufacturer,
  cost_in_credits: costInCredits,
  length,
  crew,
  passengers,
  cargoCapacity,
  consumables,
  hyperdrive_rating: hyperdriveRating,
  MGLT,
  starship_class: starshipClass,
}) => (
  <div className="card">
    <h2>{name}</h2>
    <p>Model: {model}</p>
    <p>Manufacturer: {manufacturer} </p>
    <p>Cost: {costInCredits}</p>
    <p>Length: {length}</p>
    <p>Crew: {crew} people</p>
    <p>Passenger: {passengers} people</p>
    <p>Cargo capacity: {cargoCapacity}</p>
    <p>Consumables: {consumables}</p>
    <p>Rating: {hyperdriveRating}</p>
    <p>MGLT: {MGLT}</p>
    <p>Starship class: {starshipClass}</p>
  </div>
);

export default CardStarship;
