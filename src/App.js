import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import M from 'materialize-css';

import { useSelector } from 'react-redux';
import BattleHero from './components/BattleHero';
import HeroesList from './components/HeroesList';
//import { Navbar, NavItem, Icon } from 'react-materialize'; //There is a bug with Redux
import 'materialize-css/dist/css/materialize.min.css';
import AboutPage from './About';
import AppHeader from './AppHeader';

function App() {

  const content = useSelector(state => state);

  useEffect(() => {
    M.AutoInit(); //CSS
  }, []);

  //console.log(content);

  return (
    <div className="App">
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<BattleHero />} />
        <Route path="/heroes" element={<HeroesList />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
      {content.data && (<div>{content.data.attributionText}</div>)}
    </div>
  );
}

export default App;
