import { combineReducers, createStore } from "redux";
import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";



let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer
})

let store = createStore(reducers);

window.store = store;

export default store;