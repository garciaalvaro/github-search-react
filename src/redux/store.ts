import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(combineReducers({}), composeWithDevTools());
