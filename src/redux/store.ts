import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducers } from "./reducers";

export const store = createStore(
	combineReducers(reducers),
	composeWithDevTools()
);
