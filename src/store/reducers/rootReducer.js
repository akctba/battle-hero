import userReducer from './userReducer';
import heroesReducer from './heroesReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
    heroes: heroesReducer
});

export default rootReducer;