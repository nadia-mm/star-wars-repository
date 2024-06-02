import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './pages/home/Home';
import People from './pages/people/People';
import Planet from './pages/planet/Planet';
import Starship from './pages/starship/Starship';
import Film from './pages/film/Film';
import { PEOPLE_URL, PLANET_URL, STARSHIP_URL } from './Constant';
import Error from './pages/error/Error';

const Routes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'home', element: <Home /> },
    { path: 'people', element: <People url={PEOPLE_URL} /> },
    { path: 'planets', element: <Planet url={PLANET_URL} /> },
    { path: 'starships', element: <Starship url={STARSHIP_URL} /> },
    { path: 'films', element: <Film /> },
    { path: '*', element: <Error /> },
  ]);
  return routes;
};

export default Routes;
