import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducers } from "./reducers";
import {
	updateResults,
	throttle,
	fetchRepositories,
	minCharacters,
} from "./middlewares";

export const generateStore = (): Store<State, Actions> =>
	createStore<State, Actions, unknown, unknown>(
		combineReducers(reducers),

		composeWithDevTools(
			applyMiddleware(
				updateResults,
				minCharacters,
				throttle,
				fetchRepositories,

				// Check the min characters, in case the keywords have
				// changed after fetch was called but before it resolved.
				minCharacters
			)
		)
	);

export const store = generateStore();
