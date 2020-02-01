import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducers } from "./reducers";
import {
	updateResults,
	throttle,
	fetchRepositories,
	logger,
	minCharacters
} from "./middlewares";

export const store = createStore(
	combineReducers(reducers),

	composeWithDevTools(
		applyMiddleware(
			updateResults,
			minCharacters,
			throttle,
			fetchRepositories,
			minCharacters,
			logger
		)
	)
);
