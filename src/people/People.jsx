import React, { useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";
import "./people.css";

export const People = ({ url }) => {
  const [people, setPeople] = useState(undefined);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(url);

  useEffect(() => {
    const getData = async () => {
      await fetchData(currentPage).then((data) => {
        const { previous, next, results } = data;
        setPeople(results);
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
    <div className="content__people">
      <h1>People</h1>
      {getNavigationButtons()}
      {people !== null && people !== undefined &&
        people.map((person, key = 0) => (
          <Card key={`card-people-${key++}`} {...person} />
        ))}
      {getNavigationButtons()}
    </div>
  );
};

const Card = ({
  name,
  mass,
  birth_year,
  gender,
  eye_color,
  hair_color,
  height,
  skin_color,
}) => (
  <div className="card">
    <h2>{name}</h2>
    <p>Birth Year: {birth_year}</p>
    <p>Gender: {gender} </p>
    <p>Eye Color: {eye_color}</p>
    <p>Hair Color: {hair_color}</p>
    <p>Mass: {mass} kg</p>
    <p>Height: {height}</p>
    <p>Skin Color: {skin_color}</p>
  </div>
);
