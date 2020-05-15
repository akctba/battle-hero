import React, {useEffect, useState} from "react";
//import { connect } from "react-redux";
import HeroCard from './HeroCard';
import Result from './Result';
import allActions from "../store/actions";
import { Row, Col } from 'react-materialize';
import { useSelector, useDispatch } from "react-redux";
import CryptoJS from 'crypto-js'
import Axios from "axios";

const BattleHero = () => {

    const[heroA, setHeroA] = useState();
    const[heroB, setHeroB] = useState();

    const heroes = useSelector(state => state.heroes);

    const dispatch = useDispatch();

    // const getMarvelData = () => {

    //     return dispatch => {
    //         console.log("entrou no getMarvel...");
    //         let ts = (new Date()).getTime();
    //         let publick = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
    //         let privatek = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
        
    //         let hash = CryptoJS.MD5(ts+privatek+publick);

    //         Axios.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publick}&hash=${hash}&ts=${ts}&orderBy=-modified`)
    //             .then(res => 
    //                 dispatch({
    //                     type: "FETCH_MARVEL_SUCCESS",
    //                     loading: false,
    //                     data: res.data
    //                 }))
    //     }

    //   }

    useEffect(() => {
        dispatch(allActions.heroActions.fetchMarvel());
        // let m = allActions.heroActions.getMarvel();
        // console.log("m", m);
        //dispatch(getMarvelData());

        // return function(dispatch) {
        //     return allActions.heroActions.fetchMarvel().then(h => {
        //         dispatch()

        //     })
        // }
    }, [])

    // componentDidMount() {
    //     this.props.dispatch(fetchProducts());
    // }

    //temp
    console.log("HEROES", heroes);
   
    if (heroes.error) {
        return <div>Error! {heroes.error.message}</div>;
    }

    if (heroes.loading || !heroes.data.data) {
        return <div>Loading...</div>;
    }

    const list = heroes.data.results;
    let randomA = Math.floor(Math.random() * (list.length+1));
    let randomB = randomA;
    while (randomB.id === randomA.id) { //prevent duplication
        randomB = Math.floor(Math.random() * (list.length+1));
    }
    setHeroA(list[randomA]);
    setHeroB(list[randomB]);

    return (
        <>
        <Row>
            <Col l={4} m={6} s={6}><HeroCard hero={heroA} /></Col>
            <Col l={4} m={6} s={6}><HeroCard hero={heroB} /></Col>
            <Col l={4} m={12} s={12}><Result /></Col>
        </Row>
        <Row>
            <Col><p>Data provided by Marvel. © 2014 Marvel</p></Col>
        </Row>
        </>
    );
}

// const mapStateToProps = state => ({
//   heroes: state.heroes.marvel,
//   loading: state.heroes.loading,
//   error: state.heroes.error
// });

//export default connect(mapStateToProps)(BattleHero);
export default BattleHero;
