/**
 * Function that runs a Promise which will resolve after the given time
 */
export const getTimeoutPromise = (time = 1000) =>
	new Promise(response => setTimeout(response, time));
