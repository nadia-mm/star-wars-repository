import { useEffect, useState } from "react";
import { fetchData } from "../../api/fetchData";
import "./starship.scss";

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

  const getNavigationButtons = () => {
    return (
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
  };

  return (
    <div className="content__starship">
      <h1>Starships</h1>
      {getNavigationButtons()}
      {starships !== null && starships !== undefined &&
        starships.map((starship, key = 0) => (
          <Card key={`card-starship-${key++}`} {...starship} />
        ))}
      {getNavigationButtons()}
    </div>
  );
};

const Card = ({
  name,
  model,
  manufacturer,
  cost_in_credits,
  length,
  crew,
  passengers,
  cargo_capacity,
  consumables,
  hyperdrive_rating,
  MGLT,
  starship_class,
}) => (
    <div className="card">
      <h2>{name}</h2>
      <p>Model: {model}</p>
      <p>Manufacturer: {manufacturer} </p>
      <p>Cost: {cost_in_credits}</p>
      <p>Length: {length}</p>
      <p>Crew: {crew} people</p>
      <p>Passenger: {passengers} people</p>
      <p>Cargo capacity: {cargo_capacity}</p>
      <p>Consumables: {consumables}</p>
      <p>Rating: {hyperdrive_rating}</p>
      <p>MGLT: {MGLT}</p>
      <p>Starship class: {starship_class}</p>
    </div>
  );
