import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import { Navbar, NavItem, Row, Col, Icon } from 'react-materialize';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import HeroCard from './components/HeroCard';
import Result from './components/Result';
import { connect, useDispatch } from "react-redux";

function App({heroes, loadHeroes}) {

  const [heroA, setHeroA] = useState();
  const [heroB, setHeroB] = useState();
  const [votes, setVotes] = useState();

  useEffect(()=> {
    M.AutoInit();

  }, []);

  const start = () => {
    //Pick two random heroes

    let list = heroes.data.results;
    let randomA = Math.floor(Math.random() * (list.length+1));
    let randomB = randomA;
    while (randomB !== randomA) {
      randomB = Math.floor(Math.random() * (list.length+1));
    }

    setHeroA(list[randomA]);
    setHeroB(list[randomB]);

  }

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
      {(!heroes?
      <Row><Col>Loading...</Col></Row>
      :(!heroA?
        <Row><Col><button onClick={loadHeroes}>Start</button></Col></Row>
        :
      <Row>
        <Col l={4} m={6} s={6}><HeroCard hero={heroA} /></Col>
        <Col l={4} m={6} s={6}><HeroCard hero={heroB} /></Col>
        <Col l={4} m={12} s={12}><Result /></Col>
      </Row>)
      )
      }
      <p>Data provided by Marvel. © 2014 Marvel</p>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    heroes : state.heroes.heroes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadHeroes: dispatch({type: 'LOAD_HEROES'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
