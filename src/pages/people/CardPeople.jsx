import React from 'react';

const CardPeople = ({
  name,
  mass,
  birth_year: birthYear,
  gender,
  eye_color: eyeColor,
  hair_color: hairColor,
  height,
  skin_color: skinColor,
}) => (
  <div className="card">
    <h2>{name}</h2>
    <p>Birth Year: {birthYear}</p>
    <p>Gender: {gender}</p>
    <p>Eye Color: {eyeColor}</p>
    <p>Hair Color: {hairColor}</p>
    <p>Mass: {mass} kg</p>
    <p>Height: {height}</p>
    <p>Skin Color: {skinColor}</p>
  </div>
);

export default CardPeople;
