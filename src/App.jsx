import './App.scss';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { Home } from './pages/home';
import { People } from './pages/people';
import { Planet } from './pages/planet';
import { Starship } from './pages/starship';
import { Film } from './pages/film';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PEOPLE_URL, PLANET_URL, STARSHIP_URL } from './Constant';

function App() {
  return (
    <div className="content">
      <Navbar />
      <Router>
        <Switch>
          <Route path={['/', '/home']} exact component={Home}></Route>
          <Route path="/people" exact>
            <People url={PEOPLE_URL} />
          </Route>
          <Route path="/planets" exact>
            <Planet url={PLANET_URL} />
          </Route>
          <Route path="/starships" exact>
            <Starship url={STARSHIP_URL} />
          </Route>
          <Route path="/films" exact component={Film}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
