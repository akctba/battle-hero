import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import HeroCard from './HeroCard';
import Result from './Result';
import axios from "axios";
import CryptoJS from 'crypto-js'

function BattleHero() {

  const content = useSelector(state => state.marvelReducer);
  const dispatch = useDispatch();

  const [heroA, setHeroA] = useState();
  const [heroB, setHeroB] = useState();

  // ######################################################
  // THIS IS WORKING!!! COMMENTED TO SAVE MARVEL API CALLS
  // ######################################################
  //
  function getData() {
    return dispatch => {
      let ts = (new Date()).getTime();
      let publick = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
      let privatek = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
      let hash = CryptoJS.MD5(ts+privatek+publick);
      let url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publick}&hash=${hash}&ts=${ts}&orderBy=-modified&limit=50`;
      axios.get(url).then(res => 
        dispatch({
            type: "FETCH_DATA",
            loading: false,
            data: res.data
        })
      );
    };
  }

  useEffect(() => {
    dispatch(getData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //console.log(content);

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

    if (content) {
      const list = content.data.data.results;
      if(!heroA || !heroB) {
        const matchResult = getRandom(list,2);
        setHeroA(matchResult[0]);
        setHeroB(matchResult[1]);
      }
    }
    
    const voteA = () => {
      //alert(heroA.name)
      dispatch(vote(heroA));
      setHeroA(undefined);
      setHeroB(undefined);
    }
    
    const voteB = () => {
      //alert(heroB.name)
      dispatch(vote(heroB));
      setHeroA(undefined);
      setHeroB(undefined);
    }

    const vote = (voted) => {
      return dispatch => {
        dispatch(
          {
            type: "ADD_VOTE",
            payload: {id: voted.id, name: voted.name}
          }
        )
      }
    }

  return (
    <div>
      {content.data && (
        <div className="row">
          <div className="col l4 m6 s6"><HeroCard hero={heroA} vote={voteA} /></div>
          <div className="col l4 m6 s6"><HeroCard hero={heroB} vote={voteB} /></div>
          <div className="col l4 m12 s12"><Result /></div>
        </div>
      )}
    </div>
  );
}

export default BattleHero;
