import { getFetchMock } from "./getFetchMock";

/**
 * This function replaces the global fetch with a custom function
 */
export const setFetchMock = (mock = () => getFetchMock()) => {
	// @ts-ignore TODO
	global.fetch = jest.fn(mock);
};
