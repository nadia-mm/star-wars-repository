import React, { useState } from 'react';
import { films } from './films';
import './film.scss';

const Film = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFilms = films.filter((film) => {
    const searchTermLower = searchTerm.trim().toLowerCase();
    return (
      searchTerm === '' ||
      film.title.toLowerCase().includes(searchTermLower) ||
      film.summary.toLowerCase().includes(searchTermLower)
    );
  });

  const renderResults = () => {
    if (filteredFilms.length === 0) {
      return <h2>No results found</h2>;
    }
    return (
      <ul>
        {filteredFilms.map((film) => (
          <li key={film.id}>
            <h2>{film.title}</h2>
            <h4>{film.summary}</h4>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="content__film">
      <h1>Films</h1>
      <div className="content__film__input">
        <input
          type="text"
          placeholder="Search film..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      {renderResults()}
    </div>
  );
};

export default Film;
