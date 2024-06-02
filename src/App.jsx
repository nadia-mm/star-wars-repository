import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Navbar from './navbar/Navbar';
import NavbarMobile from './navbar/NavbarMobile';
import Footer from './footer/Footer';
import './App.scss';

const App = () => (
  <Router>
    <Navbar />
    <NavbarMobile />
    <div className="content">
      <AppRoutes />
    </div>
    <Footer />
  </Router>
);

export default App;
