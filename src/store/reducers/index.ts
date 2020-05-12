import {combineReducers} from 'redux'
import demo from "./demotextReducer";

const createRootReducer = () => combineReducers({
    demo,
})

export default createRootReducer
