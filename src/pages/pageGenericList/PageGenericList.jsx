import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { CircularProgress } from '@mui/material';
import Error from '../error/Error';
import { fetchData } from '../../api/fetchData';
import NavigationPageButtons from './NavigationPageButton';
import './page.scss';

const PageGenericList = React.memo(({ url, title, CardComponent }) => {
  const [currentPage, setCurrentPage] = useState(url);

  const { isLoading, error, data } = useQuery(
    [title, currentPage],
    () => fetchData(currentPage),
    { keepPreviousData: true },
  );

  if (error) return <Error message={error} />;
  if (isLoading)
    return (
      <div className="loading-container">
        <CircularProgress />
      </div>
    );

  const { previous: previousPage, next: nextPage, results: items } = data || {};

  return (
    <div className="content__page">
      <h1>{title}</h1>
      <NavigationPageButtons
        previousPage={previousPage}
        nextPage={nextPage}
        setCurrentPage={setCurrentPage}
      />
      {items?.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardComponent key={`${title.toLowerCase()}-${index}`} {...item} />
      ))}
      <NavigationPageButtons
        previousPage={previousPage}
        nextPage={nextPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
});

export default PageGenericList;
