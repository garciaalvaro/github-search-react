import { Middleware } from "redux";

export const minCharacters: Middleware<{}, State> = ({ getState }) => next => (
	action: Actions
) => {
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
