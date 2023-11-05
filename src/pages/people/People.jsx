/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/fetchData';
import './people.scss';

// eslint-disable-next-line import/prefer-default-export
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
    <div className="content__people">
      <h1>People</h1>
      {getNavigationButtons()}
      {people &&
        // eslint-disable-next-line no-return-assign
        people.map((person, index = 0) => (
          <Card key={`card-people-${(index += 1)}`} {...person} />
        ))}
      {getNavigationButtons()}
    </div>
  );
};

const Card = ({
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
    <p>Gender: {gender} </p>
    <p>Eye Color: {eyeColor}</p>
    <p>Hair Color: {hairColor}</p>
    <p>Mass: {mass} kg</p>
    <p>Height: {height}</p>
    <p>Skin Color: {skinColor}</p>
  </div>
);
