import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducers } from "./reducers";
import {
	throttle,
	fetchRepositories,
	logger,
	minCharacters
} from "./middlewares";

export const store = createStore(
	combineReducers(reducers),

	composeWithDevTools(
		applyMiddleware(
			minCharacters,
			throttle,
			fetchRepositories,
			minCharacters,
			logger
		)
	)
);
