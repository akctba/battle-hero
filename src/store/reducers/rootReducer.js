import authReducer from './authReducer';
import heroesReducer from './heroesReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    heroes: heroesReducer
});

export default rootReducer;