import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducers } from "./reducers";
import {
	updateResults,
	throttle,
	fetchRepositories,
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
			// We check the min characters, in case the keywords have
			// changed after fetch was called but before it resolved
			minCharacters
		)
	)
);
