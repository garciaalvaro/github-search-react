const data_no_results = {
	items: [],
	total_count: 0,
	incomplete_results: false
};

/**
 * This function mocks the fetch function. To be used in Jest.
 */
export const getFetchMock = (
	data: FetchedData = data_no_results,
	time = 1000
) => () => new Promise(() => setTimeout(() => data, time));
