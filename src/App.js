import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import M from 'materialize-css';
import { useSelector } from 'react-redux';
import BattleHero from './components/BattleHero';
import HeroesList from './components/HeroesList';
//import { Navbar, NavItem, Icon } from 'react-materialize'; //There is a bug with Redux
import 'materialize-css/dist/css/materialize.min.css';

function App() {

  const content = useSelector(state => state);

  useEffect(() => {
    M.AutoInit(); //CSS
  }, []);

  //console.log(content);

  return (
    <div className="App">
    <Router>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Battle Hero</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/heroes">Heroes</Link></li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact>
          <BattleHero />
        </Route>
        <Route path="/heroes">
          <HeroesList />
        </Route>
        <Route path="/about">
          <div>
            <h2>Author: Alex Kayser</h2>
          </div>
        </Route>
      </Switch>
    </Router>
      {content.data && (<div>{content.data.attributionText}</div>)}
    </div>
  );
}

export default App;
