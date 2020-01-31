import { Middleware } from "redux";

export const logger: Middleware<{}, State> = () => next => (
	action: Actions
) => {
	console.log(action);

	next(action);
};
