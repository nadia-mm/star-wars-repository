/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/fetchData';
import './starship.scss';

// eslint-disable-next-line import/prefer-default-export
export const Starship = ({ url }) => {
  const [starships, setStarships] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(url);

  useEffect(() => {
    const getData = async () => {
      await fetchData(currentPage).then((data) => {
        const { previous, next, results } = data;
        setStarships(results);
        setPreviousPage(previous);
        setNextPage(next);
      });
    };
    getData();
  }, [currentPage]);

  const getNavigationButtons = () => (
    <div className="content__button">
      <input
        type="button"
        onClick={() => {
          setCurrentPage(previousPage);
        }}
        value="<<"
      />
      <input
        type="button"
        onClick={() => {
          setCurrentPage(nextPage);
        }}
        value=">>"
      />
    </div>
  );

  return (
    <div className="content__starship">
      <h1>Starships</h1>
      {getNavigationButtons()}
      {starships &&
        starships.map((starship, index = 0) => (
          // eslint-disable-next-line no-param-reassign
          <Card key={`card-starship-${(index += 1)}`} {...starship} />
        ))}
      {getNavigationButtons()}
    </div>
  );
};

const Card = ({
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
