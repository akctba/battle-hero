import initialData from './base.json';

function marvelReducer(state = { data: initialData }, action) {
    switch (action.type) {
      case "FETCH_DATA":
        return {
          ...state,
          data: action.data
        };
      default:
        return state;
    }
  }
  
  export default marvelReducer;
  