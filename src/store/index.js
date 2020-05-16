import marvelReducer from './marvelStore'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    marvelReducer
})

export default rootReducer