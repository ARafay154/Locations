
import { combineReducers, createStore } from "redux";

import { locationReducer } from "../reducer/LocationReducer";


let red = combineReducers({
    locationReducer
});

const store = createStore(red)

export default store