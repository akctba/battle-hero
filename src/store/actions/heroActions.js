import CryptoJS from 'crypto-js'
export const FETCH_MARVEL = "FETCH_MARVEL";
export const FETCH_MARVEL_BEGIN = "FETCH_MARVEL_BEGIN";
export const FETCH_MARVEL_SUCCESS = "FETCH_MARVEL_SUCCESS";
export const FETCH_MARVEL_FAILURE = "FETCH_MARVEL_FAILURE";

// Handle HTTP errors since fetch won't.
const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const getMarvel = () => {

    let ts = (new Date()).getTime();
    let publick = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
    let privatek = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

    let hash = CryptoJS.MD5(ts+privatek+publick);

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publick}&hash=${hash}&ts=${ts}&orderBy=-modified`;
    
    return fetch(url, requestOptions)
            .then(handleErrors)    
            .then(response => response.json());
}

const fetchMarvel = () => {
  return dispatcha => {
    dispatcha(fetchMarvelBegin());
    return getMarvel()
      .then(json => {
        dispatcha(fetchMarvelSuccess(json.products));
        return json.products;
      })
      .catch(error =>
        dispatcha(fetchMarvelFailure(error))
      );
  }
}

const fetchMarvelBegin = () => ({
  type: FETCH_MARVEL_BEGIN
});

const fetchMarvelSuccess = marvel => ({
  type: FETCH_MARVEL_SUCCESS,
  payload: { marvel }
});

const fetchMarvelFailure = error => ({
  type: FETCH_MARVEL_FAILURE,
  payload: { error }
});

export default {
  fetchMarvel,
  fetchMarvelBegin,
  fetchMarvelSuccess,
  fetchMarvelFailure
}