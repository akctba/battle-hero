import React, { useEffect } from 'react';
import M from 'materialize-css';
import { useSelector } from 'react-redux';
import BattleHero from './components/BattleHero';
import { Navbar, NavItem, Icon } from 'react-materialize';
import 'materialize-css/dist/css/materialize.min.css';

function App() {

  const content = useSelector(state => state);

  useEffect(() => {
    M.AutoInit(); //CSS
  }, []);

  console.log(content);

  return (
    <div className="App">
      <Navbar
      alignLinks="right"
      brand={<a className="brand-logo" href="/">Battle Hero!</a>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem href="#">
        About
      </NavItem>
      <NavItem href="#">
        Sign up
      </NavItem>
    </Navbar>
      <BattleHero />
      {content.data && (<div>{content.data.attributionText}</div>)}
    </div>
  );
}

export default App;
