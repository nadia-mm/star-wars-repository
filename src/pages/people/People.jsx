/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@mui/material';
import Card from './CardPeople';
import Error from '../error/Error';
import { fetchData } from '../../api/fetchData';
import NavigationPageButtons from '../../NavigationPageButton';
import './people.scss';

const People = ({ url }) => {
  const [people, setPeople] = useState([]);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(url);

  const { isLoading, error, data } = useQuery(
    ['fetchPeople', currentPage],
    () => fetchData(currentPage),
    {
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    if (data) {
      const { previous, next, results } = data;
      setPeople(results);
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
    <div className="content__people">
      <h1>People</h1>
      <NavigationPageButtons
        previousPage={previousPage}
        nextPage={nextPage}
        setCurrentPage={setCurrentPage}
      />
      {people &&
        people.map((person, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={`card-people-${index}`} {...person} />
        ))}
      <NavigationPageButtons
        previousPage={previousPage}
        nextPage={nextPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default People;
