import { Middleware } from "redux";

import { throttleStarted } from "../actions";

const throttled_actions: Record<string, NodeJS.Timeout> = {};

/**
 * This middleware will throttle actions that have the
 * meta.throttle_time property.
 */
export const throttle: Middleware<unknown, State> = () => next => (
	action: Actions
) => {
	// @ts-expect-error TODO
	if (action.meta?.throttle_time === undefined) return next(action);

	next(throttleStarted(action.type));

	if (throttled_actions[action.type]) {
		clearTimeout(throttled_actions[action.type]);

		delete throttled_actions[action.type];
	}

	throttled_actions[action.type] = setTimeout(() => {
		delete throttled_actions[action.type];

		next(action);

		// @ts-expect-error TODO
	}, action.meta.throttle_time);
};
