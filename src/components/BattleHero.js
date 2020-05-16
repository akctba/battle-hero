import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from 'react-materialize';
import HeroCard from './HeroCard';
import Result from './Result';
import axios from "axios";
import CryptoJS from 'crypto-js'

function BattleHero() {

  const content = useSelector(state => state);
  const dispatch = useDispatch();

  // ######################################################
  // THIS IS WORKING!!! COMMENTED TO SAVE MARVEL API CALLS
  // ######################################################
  //
  // function getData() {
  //   return dispatch => {
  //     let ts = (new Date()).getTime();
  //     let publick = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  //     let privatek = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
  //     let hash = CryptoJS.MD5(ts+privatek+publick);
  //     let url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publick}&hash=${hash}&ts=${ts}&orderBy=-modified`;
  //     axios.get(url).then(res => 
  //       dispatch({
  //           type: "FETCH_DATA",
  //           loading: false,
  //           data: res.data
  //       })
  //     );
  //   };
  // }

  useEffect(() => {
    //dispatch(getData());
  }, []);

  console.log(content);

  return (
    <div>
      {content.data && (
        <>
        <Row>
            <Col l={4} m={6} s={6}><HeroCard /></Col>
            <Col l={4} m={6} s={6}><HeroCard /></Col>
            <Col l={4} m={12} s={12}><Result /></Col>
        </Row>
        <Row>
            <Col><p>Data provided by Marvel. © 2014 Marvel</p></Col>
        </Row>
        </>
      )}
    </div>
  );
}

export default BattleHero;
