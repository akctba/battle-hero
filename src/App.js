import React, { useEffect } from 'react';
import M from 'materialize-css';
import { Navbar, NavItem, Icon } from 'react-materialize';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
//import { connect, useDispatch } from "react-redux";
import BattleHero from "./components/BattleHero"

function App({heroes, loadHeroes}) {

  useEffect(()=> {
    M.AutoInit(); //CSS
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
      <BattleHero />
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     heroes : state.heroes.heroes
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadHeroes: dispatch({type: 'LOAD_HEROES'})
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
