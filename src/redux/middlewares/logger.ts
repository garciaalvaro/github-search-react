import { Middleware } from "redux";

/**
 * This middleware logs every action that goes to the reducers
 */
export const logger: Middleware<unknown, State> = () => next => (
	action: Actions
) => {
	console.log(action);

	next(action);
};
