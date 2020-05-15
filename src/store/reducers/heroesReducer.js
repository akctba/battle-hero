import { FETCH_MARVEL_BEGIN, FETCH_MARVEL_SUCCESS, FETCH_MARVEL_FAILURE } from "../actions/heroActions";

  const initialState = {
    marvel: {},
    loading: false,
    error: null
  };
  
const heroesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MARVEL_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_MARVEL_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          marvel: action.payload.marvel
        };
  
      case FETCH_MARVEL_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it somewhere
        // Since it failed, we don't have items to display anymore, so set it empty.
        // This is up to you and your app though: maybe you want to keep the items
        // around! Do whatever seems right.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          marvel: {}
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }
  
export default heroesReducer;