import React, { useEffect } from 'react';
import M from 'materialize-css';
import { Navbar, NavItem, Row, Col, Icon } from 'react-materialize';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import HeroCard from './components/HeroCard';
import Result from './components/Result';

function App() {

  useEffect(()=> {
    M.AutoInit();
  }, []);

  return (<>
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
      <Row><Col s={12}><h3>Between these two heroes, which one do you prefer?</h3></Col></Row>
      <Row>
        <Col l={4} m={6} s={6}><HeroCard /> </Col>
        <Col l={4} m={6} s={6}><HeroCard /></Col>
        <Col l={4} m={12} s={12}><Result /></Col>
      </Row>
      <p>Data provided by Marvel. © 2014 Marvel</p>
    </>
  );
}

export default App;
