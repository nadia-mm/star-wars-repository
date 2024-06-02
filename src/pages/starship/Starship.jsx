/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@mui/material';
import Card from './CardStarship';
import Error from '../error/Error';
import { fetchData } from '../../api/fetchData';
import NavigationPageButtons from '../../NavigationPageButton';
import './starship.scss';

const Starship = ({ url }) => {
  const [starships, setStarships] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(url);

  const { isLoading, error, data } = useQuery(
    ['fetchStarships', currentPage],
    () => fetchData(currentPage),
    {
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    if (data) {
      const { previous, next, results } = data;
      setStarships(results);
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
    <div className="content__starship">
      <h1>Starships</h1>
      <NavigationPageButtons
        previousPage={previousPage}
        nextPage={nextPage}
        setCurrentPage={setCurrentPage}
      />
      {starships &&
        starships.map((starship, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={`card-starship-${index}`} {...starship} />
        ))}
      <NavigationPageButtons
        previousPage={previousPage}
        nextPage={nextPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Starship;
