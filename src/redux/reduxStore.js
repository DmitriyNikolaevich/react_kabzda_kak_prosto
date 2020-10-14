import { combineReducers, createStore } from "redux";
import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";



let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer
})

let store = createStore(reducers);

window.store = store;

export default store;