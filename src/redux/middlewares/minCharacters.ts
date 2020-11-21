import { Middleware } from "redux";

/**
 * This middleware will prevent fetching data if the
 * number of keyword characters is lower than 3.
 */
export const minCharacters: Middleware<unknown, State> = ({
	getState,
}) => next => (action: Actions) => {
	if (
		action.type !== "FETCH_REPOSITORIES" &&
		action.type !== "FETCH_REPOSITORIES_COMPLETED"
	) {
		return next(action);
	}

	const { keywords } = getState().ui;

	if (keywords.length >= 3) {
		return next(action);
	}
};
