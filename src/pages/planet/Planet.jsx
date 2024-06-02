/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@mui/material';
import Card from './CardPlanet';
import Error from '../error/Error';
import { fetchData } from '../../api/fetchData';
import NavigationPageButtons from '../../NavigationPageButton';
import './planet.scss';

const Planet = ({ url }) => {
  const [planets, setPlanets] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(url);

  const { isLoading, error, data } = useQuery(
    ['fetchPlanets', currentPage],
    () => fetchData(currentPage),
    {
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    if (data) {
      const { previous, next, results } = data;
      setPlanets(results);
      setPreviousPage(previous);
      setNextPage(next);
    }
  }, [data]);

  if (error) {
    return <Error message={error} />;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="content__planet">
      <h1>Planets</h1>
      <NavigationPageButtons
        previousPage={previousPage}
        nextPage={nextPage}
        setCurrentPage={setCurrentPage}
      />
      {planets &&
        planets.map((planet, index) => (
          <Card key={`card-planet-${index}`} {...planet} />
        ))}
      <NavigationPageButtons
        previousPage={previousPage}
        nextPage={nextPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Planet;
