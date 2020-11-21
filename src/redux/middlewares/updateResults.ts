import { Middleware } from "redux";

import { fetchRepositories, updatePage } from "../actions";

/**
 * This middleware will dispatch fetchRepositories.
 * It is a convenient middleware that will call fetch and perform
 * some side effect (like updating page number if necessary),
 * in a single place to avoid repeating functionality in
 * the components.
 */
export const updateResults: Middleware<unknown, State> = () => next => (
	action: Actions
) => {
	if (
		action.type !== "UPDATE_KEYWORDS" &&
		action.type !== "UPDATE_LAST_UPDATE" &&
		action.type !== "UPDATE_LANGUAGE" &&
		action.type !== "UPDATE_MIN_STARS" &&
		action.type !== "UPDATE_PAGE"
	) {
		return next(action);
	}

	next(action);

	if (action.type === "UPDATE_PAGE") {
		next(fetchRepositories({ throttle_time: 0 }));
	} else {
		next(updatePage(1));

		// TODO: improve the fetchRepositories type to
		// conditionally receive the meta object.
		next(fetchRepositories({ throttle_time: 1000 }));
	}
};
