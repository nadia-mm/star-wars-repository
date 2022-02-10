import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Home } from './pages/home';
import { People } from './pages/people';
import { Planet } from './pages/planet';
import { Starship } from './pages/starship';
import { Film } from './pages/film';
import { PEOPLE_URL, PLANET_URL, STARSHIP_URL } from './Constant';
import './App.scss';
import { Error } from './pages/error';

// eslint-disable-next-line no-console
console.log(process.env.SUPPORT_EMAIL);
const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: 'people', element: <People url={PEOPLE_URL} /> },
    { path: 'planets', element: <Planet url={PLANET_URL} /> },
    { path: 'starships', element: <Starship url={STARSHIP_URL} /> },
    { path: 'films', element: <Film /> },
    { path: '*', element: <Error /> },
  ]);
  return routes;
};

const App = () => (
  <Router>
    <Navbar />
    <div className="content">
      <AppRoutes />
    </div>
    <Footer />
  </Router>
);

export default App;
