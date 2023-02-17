
import {combineReducers} from 'redux'
import inChatReducer from "./isInChat";


const allreducers = combineReducers({
    inChat : inChatReducer,
})

export default allreducers

