import React, { useState } from 'react';
import { films } from './index';
import './film.scss';

// eslint-disable-next-line import/prefer-default-export
export const Film = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const result = films
    .filter((film) => {
      if (searchTerm === '') {
        return film;
      }
      if (
        film.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        film.summary.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return film;
      }
      return '';
    })
    .map((film) => (
      <li key={film.title}>
        <h2>{film.title}</h2>
        <h4>{film.summary}</h4>
      </li>
    ));

  const showResult = () => {
    if (result.length > 0) {
      return <ul>{result}</ul>;
    }
    return <h2>No results found</h2>;
  };

  return (
    <div className="content__film">
      <h1>Films</h1>
      <div className="content__film__input">
        <input
          type="text"
          placeholder="Search film..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      {showResult()}
    </div>
  );
};
