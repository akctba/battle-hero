import marvelReducer from './marvelStore'
import battleReducer from './battleStore'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    marvelReducer,
    battleReducer
})

export default rootReducer