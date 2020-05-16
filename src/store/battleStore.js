
function battleReducer(state = { data: "" }, action) {
    switch (action.type) {
      case "ADD_VOTE":
        return {
          ...state,
          data: action.data
        };
      default:
        return state;
    }
  }
  
  export default battleReducer;
  