import { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";
import "./planet.css";

export const Planet = ({ url }) => {
  const [planets, setPlanets] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(url);

  useEffect(() => {
    const getData = async () => {
      await fetchData(currentPage).then((data) => {
        const { previous, next, results } = data;
        setPlanets(results);
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
    <div className="content__planet">
      <h1>Planets</h1>
      {getNavigationButtons()}
      {planets !== null && planets !== undefined &&
        planets.map((planet, key) => (
          <Card key={`card-planet-${key}`} {...planet} />
        ))}
      {getNavigationButtons()}
    </div>
  );
};

const Card = ({
  name,
  rotation,
  orbital_period,
  diameter,
  climate,
  gravity,
  terrain,
  surface_water,
  population,
}) => (
  <div className="card">
    <div>
      <h2>{name}</h2>
    </div>
    <p>Rotation: {rotation}</p>
    <p>Orbital Period: {orbital_period}</p>
    <p>Diameter: {diameter}</p>
    <p>Climate: {climate}</p>
    <p>Gravity: {gravity} kg</p>
    <p>Terrain: {terrain}</p>
    <p>Surface Water: {surface_water}</p>
    <p>Population: {population}</p>
  </div>
);
