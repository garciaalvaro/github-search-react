import { Middleware } from "redux";

import { fetchRepositories, updatePage } from "../actions";

export const updateResults: Middleware<{}, State> = () => next => (
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
		next(fetchRepositories({ throttle_time: 1000 }));
	}
};
