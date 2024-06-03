/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@mui/material';
import Error from '../error/Error';
import { fetchData } from '../../api/fetchData';
import NavigationPageButtons from './NavigationPageButton';
import './page.scss';

const PageGenericList = ({ url, title, CardComponent }) => {
  const [items, setItems] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(url);

  const { isLoading, error, data } = useQuery(
    [title, currentPage],
    () => fetchData(currentPage),
    {
      keepPreviousData: true,
    },
  );

  useEffect(() => {
    if (data) {
      const { previous, next, results } = data;
      setItems(results);
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
    <div className={`content content__${title.toLowerCase()}`}>
      <h1>{title}</h1>
      <NavigationPageButtons
        previousPage={previousPage}
        nextPage={nextPage}
        setCurrentPage={setCurrentPage}
      />
      {items &&
        items.map((item, index) => (
          <CardComponent
            // eslint-disable-next-line react/no-array-index-key
            key={`card-${title.toLowerCase()}-${index}`}
            {...item}
          />
        ))}
      <NavigationPageButtons
        previousPage={previousPage}
        nextPage={nextPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PageGenericList;
