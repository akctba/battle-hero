
const compare = (a, b) => {
  return b.votes - a.votes;
}

function battleReducer(state = [], action) {
  //console.log("Battle action", action);
    switch (action.type) {
      case "ADD_VOTE":
        let heroID = action.payload.id;
        let position = state.findIndex(hero => hero.id === heroID);
        let newList;

        if (position < 0) {
          //create a new item on the list
          newList = [...state, {...action.payload, "votes": 1}];          
        } else {
          //update vote
          let hero = state[position];
          hero.votes = hero.votes+1;
          newList = [...state.slice(0, position), hero, ...state.slice(position+1)];
        }

        newList.sort(compare);

        return newList;

      default:
        return state;
    }
  }
  
  export default battleReducer;
  