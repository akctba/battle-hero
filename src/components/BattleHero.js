import React, { useEffect, useState } from "react";
//import { connect } from "react-redux";
import HeroCard from './HeroCard';
import Result from './Result';
import allActions from "../store/actions";
import { Row, Col } from 'react-materialize';
import { useSelector, useDispatch } from "react-redux";

const BattleHero = () => {

    const [heroA, setHeroA] = useState();
    const [heroB, setHeroB] = useState();
    const [heroesList, setHeroesList] = useState();

    const heroes = useSelector(state => state.heroes);

    const dispatch = useDispatch();

    useEffect(() => {
        //to update if heroes list exists
        setHeroesList(heroes);
    }, [heroes]);

    useEffect(() => {
        dispatch(allActions.heroActions.fetchMarvel())
    }, [])

    // componentDidMount() {
    //     this.props.dispatch(fetchProducts());
    // }

    //temp
    console.log("HEROES", heroes);

    if (heroes.error) {
        return <div>Error! {heroes.error.message}</div>;
    }

    if (heroes.loading || !heroes) {
        return <div>Loading...</div>;
    }

    function getRandom(arr, n) {
        let result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            let x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    if (heroesList && !heroA && !heroB) {
        const list = heroes.marvel.data.results;
        const matchResult = getRandom(list,2);
        setHeroA(matchResult[0]);
        setHeroB(matchResult[1]);
    }
    // let randomA = Math.floor(Math.random() * (list.length+1));
    // let randomB = randomA;
    // while (randomB.id === randomA.id) { //prevent duplication
    //     randomB = Math.floor(Math.random() * (list.length+1));
    // }
    // setHeroA(list[randomA]);
    // setHeroB(list[randomB]);

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