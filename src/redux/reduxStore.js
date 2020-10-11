import dialogPageReducer from "./dialogPageReducer";
import profilePageReducer from "./profilePageReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer
})

let store = createStore(reducers);

export default store;